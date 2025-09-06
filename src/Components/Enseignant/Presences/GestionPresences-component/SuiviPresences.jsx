import ENVIRONMENT from "../../../../environment/index";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import {
  format,
  parse,
  startOfWeek,
  getDay,
  addDays,
  subDays,
  isSameDay,
} from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import utcIsoToLocalWallClock from "./utils/utcIsoToLocalWallClock";
import normalizeSegmentsClient from "./utils/normalizeSegmentsClient";
import { fr } from "date-fns/locale";
import "./index.css";
import Swal from "sweetalert2";

let ENDPOINT = ENVIRONMENT.ENDPOINT_URL;
// secondaire : 68add5217faf2d64301bc7ee
// primaire   : 68add4e57faf2d64301bc7ec
let TEACHER_ID = "68add4e57faf2d64301bc7ec";

const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const SuiviPresences = ({ Cls_Id, Ens_Id, Mat_Id, Date_Presence }) => {
  const [teacherNiveau, setTeacherNiveau] = useState(null);
  const [classes, setClasses] = useState([]);
  const [seances, setSeances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClasse, setSelectedClasse] = useState(null);
  const [presences, setPresences] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSeanceId, setSelectedSeanceId] = useState(null);
  const [popupSeance, setPopupSeance] = useState(null);
  const [loadingPresences, setLoadingPresences] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [IsSavingLoader, setIsSavingLoader] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [retardPopUp, setRetardPopUp] = useState(false);
  const [commentPopUp, setCommentPopUp] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentImgUrl, setStudentImgUrl] = useState("");
  const [commentsHtml, setCommentsHtml] = useState(""); // State to store comments HTML

  function handleSelectEvent(event) {
    setPopupSeance(event);
    fetchPresencesForSeance(event.id);
  }

  const handlePrev = () => handleNavigation(subDays(currentDate, 1));
  const handleNext = () => handleNavigation(addDays(currentDate, 1));

  function handleNavigation(nextDate) {
    if (isChanged) {
      setPendingAction(() => () => {
        setCurrentDate(nextDate);
      });
      setShowConfirmPopup(true);
    } else {
      setCurrentDate(nextDate);
    }
  }

  function togglePresenceForSeance(seanceId, eleveId) {
    setPresences((prev) => {
      const seanceMap = { ...(prev[seanceId] || {}) };
      seanceMap[eleveId] = !seanceMap[eleveId];
      return { ...prev, [seanceId]: seanceMap };
    });
    setIsChanged(true);
  }

  async function fetchClassesAndProfile() {
    try {
      const res = await axios.get(
        `${ENDPOINT}/enseignants/classes/${TEACHER_ID}`
      );
      if (res.status === 200) {
        setTeacherNiveau(res.data.profile.type);
        setClasses(res.data.classes);
      } else setClasses([]);
    } catch (err) {
      setClasses([]);
      console.error("Erreur axios :", err);
    } finally {
      setLoading(false);
    }
  }

  async function fetchPresencesForSeance(seanceId) {
    if (!seanceId) return;

    setLoadingPresences(true);
    try {
      const res = await axios.get(`${ENDPOINT}/presences/${seanceId}`);
      if (res.status === 200) {
        const data = res.data;
        const byEleve = {};

        data.forEach((p) => {
          const lastSegment = p.segments?.[p.segments.length - 1];
          byEleve[p.eleve] = lastSegment ? lastSegment.statut : false;
        });

        setPresences((prev) => ({ ...prev, [seanceId]: byEleve }));
      } else {
        setPresences((prev) => ({ ...prev, [seanceId]: {} }));
      }
    } catch (err) {
      console.error("Erreur fetchPresencesForSeance:", err);
      setPresences((prev) => ({ ...prev, [seanceId]: {} }));
    } finally {
      setLoadingPresences(false);
    }
  }

  async function fetchSeances() {
    if (!selectedClasse) {
      setSeances([]);
      setPresences({});
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(
        `${ENDPOINT}/enseignants/seances/${TEACHER_ID}/${selectedClasse}`
      );
      if (res.status === 200) {
        const events = res.data.map((s, index) => ({
          id: s._id,
          title: `Séance: ${index + 1}`,
          start: utcIsoToLocalWallClock(s.debut),
          end: utcIsoToLocalWallClock(s.fin),
          raw: s,
        }));
        setSeances(events);
      } else setSeances([]);
    } catch (err) {
      console.error("Erreur axios :", err);
      setSeances([]);
    } finally {
      setLoading(false);
    }
  }

  function resolveElevesForSeance(s) {
    if (!s) return [];
    const rawClasse = s.raw?.classe;
    let classeObj = null;
    if (!rawClasse) {
      const maybeId = s.raw?.classe || s.raw?.classeId;
      if (typeof maybeId === "string")
        classeObj = classes.find((c) => c._id === maybeId);
    } else if (typeof rawClasse === "string")
      classeObj = classes.find((c) => c._id === rawClasse);
    else classeObj = rawClasse;

    const elevesFromRaw =
      (classeObj && classeObj.eleves) ||
      (s.raw && s.raw.eleves) ||
      (s.raw && s.raw.classe && s.raw.classe.eleves) ||
      [];

    return elevesFromRaw
      .map((e) => {
        if (!e) return null;
        const id = typeof e === "string" ? e : e._id || e.id;
        let name = null;
        for (const c of classes) {
          const found =
            (c.eleves || []).find(
              (ce) => (typeof ce === "string" ? ce : ce._id || ce.id) === id
            ) || null;
          if (found && typeof found !== "string") {
            name =
              found.nom || found.name || found.prenom
                ? `${found.nom || ""} ${found.prenom || ""}`.trim()
                : null;
            break;
          }
        }
        return { id, name };
      })
      .filter(Boolean);
  }

  async function savePresences(seanceId) {
    if (!seanceId) {
      Swal.fire({
        icon: "warning",
        title: "Attention",
        text: "Aucune séance sélectionnée.",
      });
      return;
    }

    const current = seances.find((s) => s.id === seanceId);
    if (!current) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Séance introuvable.",
      });
      return;
    }

    setIsSavingLoader(true);

    const mapForSeance = presences[seanceId] || {};
    const students = resolveElevesForSeance(current);

    const payloadPresences = students.map((st) => {
      const statut = !!mapForSeance[st.id];
      const segment = {
        debut: current.raw?.debut
          ? new Date(current.raw.debut).toISOString()
          : current.start.toISOString(),
        fin: current.raw?.fin
          ? new Date(current.raw.fin).toISOString()
          : current.end.toISOString(),
        statut,
      };
      const segments = normalizeSegmentsClient([segment]);
      return { eleve: st.id, segments };
    });

    let jour = current.raw.debut;

    try {
      const res = await axios.post(
        `${ENDPOINT}/presences/check-in/${seanceId}/${selectedClasse}/${jour}`,
        { presences: payloadPresences }
      );
      if (res.status === 200 || res.status === 201) {
        setIsSavingLoader(false);
        setIsChanged(false);
        Swal.fire({
          icon: "success",
          title: "Succès",
          text: `Présences sauvegardées (${
            res.data.count ?? payloadPresences.length
          }).`,
        });
      } else {
        setIsSavingLoader(false);
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Réponse inattendue du serveur.",
        });
        console.log(res);
      }
    } catch (err) {
      setIsSavingLoader(false);
      console.error("Erreur savePresences:", err);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Erreur lors de la sauvegarde.",
      });
    }
  }

  // Function to post a comment
  async function postComment(studentId, comment) {
    try {
      const response = await fetch(`${ENDPOINT}/commentaires`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seance: popupSeance.id,
          enseignant: TEACHER_ID,
          etudiant: studentId,
          commentaire: comment,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      Swal.fire("Succès", "Commentaire enregistré avec succès", "success");
      setPopupSeance(null); // Close the main popup after successful submission
    } catch (error) {
      Swal.fire("Erreur", error.message, "error");
    }
  }

  // Function to post a retard
  async function postRetard(studentId) {
    try {
      const heureEntree = new Date();
      const heureDebutSeance = new Date(popupSeance.raw.debut);

      const margeRetard = Math.round(
        (heureEntree.getTime() - heureDebutSeance.getTime()) / 60000
      );

      const response = await fetch(`${ENDPOINT}/retards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seance: popupSeance.id,
          enseignant: TEACHER_ID,
          etudiant: studentId,
          heureEntree: heureEntree.toISOString(),
          margeRetard,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post retard");
      }

      Swal.fire("Succès", "Retard enregistré avec succès", "success");
      setPopupSeance(null); // Close the main popup after successful submission
    } catch (error) {
      Swal.fire("Erreur", error.message, "error");
    }
  }

  const goToToday = () => {
    const today = new Date();

    const confirmSave = Swal.fire({
      title: "Changements non sauvegardés",
      text: "Voulez-vous sauvegarder avant de changer de jour ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Oui, sauvegarder",
      cancelButtonText: "Non, continuer",
    });

    if (confirmSave.isConfirmed && currentSeance) {
      savePresences(currentSeance.id);
    }

    setCurrentDate(today);

    const todays = (seances || []).filter((s) => isSameDay(s.start, today));
    const newSeanceId = todays[0]?.id || null;

    setSelectedSeanceId((prev) => {
      if (prev && todays.some((t) => t.id === prev)) return prev;
      return newSeanceId;
    });

    if (newSeanceId) {
      fetchPresencesForSeance(newSeanceId);
    }
  };

  function handleChangeClasse(newClasseId) {
    if (isChanged) {
      setPendingAction(() => () => {
        setSelectedClasse(newClasseId);
      });
      setShowConfirmPopup(true);
    } else {
      setSelectedClasse(newClasseId);
    }
  }

  // Function to fetch comments for a student
  async function fetchCommentsForStudent(studentId) {
    try {
      console.log(`Fetching comments for student ID: ${studentId}`);
      const response = await fetch(`${ENDPOINT}/commentaires/${studentId}`);

      console.log(`Response status: ${response.status}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
      }

      const comments = await response.json();
      console.log(`Fetched comments:`, comments);
      return comments;
    } catch (error) {
      console.error("Erreur fetchCommentsForStudent:", error);
      return [];
    }
  }

  // Function to open the comment popup
  async function openCommentPopup(studentId) {
    try {
      console.log(`Opening comment popup for student ID: ${studentId}`);
      const response = await fetch(`${ENDPOINT}/commentaires/${studentId}`);

      console.log(`Response status: ${response.status}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch comments: ${response.statusText}`);
      }

      const comments = await response.json();
      console.log(`Fetched comments:`, comments);

      if (!Array.isArray(comments) || comments.length === 0) {
        throw new Error("No comments found or invalid data format.");
      }

      const commentsHtml = comments
        .map(
          (comment) =>
            `<div style='margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 5px;'>
              <p style='margin: 0; font-weight: bold;'>Enseignant: ${comment.enseignant}</p>
              <p style='margin: 0;'>Commentaire: ${comment.commentaire}</p>
            </div>`
        )
        .join("");

      setCommentsHtml(`<div style='text-align: left;'>${commentsHtml}</div>`);
      setCommentPopUp(true);
    } catch (error) {
      console.error("Erreur lors de la récupération des commentaires:", error);
      setCommentsHtml(
        `<p>Erreur lors de la récupération des commentaires: ${error.message}</p>`
      );
      setCommentPopUp(true);
    }
  }

  useEffect(() => {
    fetchClassesAndProfile();
  }, []);

  useEffect(() => {
    fetchSeances();
  }, [selectedClasse]);

  useEffect(() => {
    if (seances && seances.length > 0) {
      const todays = seances.filter((s) => isSameDay(s.start, currentDate));
      const newSeanceId = todays[0]?.id || null;

      setSelectedSeanceId((prev) => {
        if (prev && todays.some((t) => t.id === prev)) return prev;
        return newSeanceId;
      });

      if (newSeanceId) {
        fetchPresencesForSeance(newSeanceId);
      }
    }
  }, [seances, currentDate]);

  useEffect(() => {
    if (seances && seances.length > 0) {
      seances.forEach((s) => {
        const eleves = s.raw?.classe?.eleves || s.raw?.eleves || [];
        setPresences((prev) => {
          if (prev[s.id]) return prev;

          const byEleve = {};
          eleves.forEach((e) => {
            const id = typeof e === "string" ? e : e._id || e.id;
            if (id) byEleve[id] = true;
          });
          return { ...prev, [s.id]: byEleve };
        });
      });
    }
  }, [seances, classes]);

  const todaysSeances = seances?.length
    ? seances.filter((s) => isSameDay(s.start, currentDate))
    : [];

  const currentSeance =
    (seances?.length && seances.find((s) => s.id === selectedSeanceId)) ||
    (todaysSeances.length > 0 ? todaysSeances[0] : null);

  const students = resolveElevesForSeance(currentSeance);

  if (loading)
    return (
      <div style={styles.overlay}>
        <div style={styles.spinner}></div>
      </div>
    );

  const popupHand = () => {
    setPopupSeance(null);
    savePresences(popupSeance.id);
  };

  const imgParDefaut =
    "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Transparent-Image.png";

  const handlePopupClose = () => {
    setPopupSeance(null);
    setRetardPopUp(false);
    setCommentPopUp(false);
  };

  return (
    <div className="containerOfPresences">
      {IsSavingLoader && (
        <div style={styles.overlay}>
          <div style={styles.spinner}></div>
        </div>
      )}

      {showConfirmPopup && (
        <div style={styles.overlay}>
          <div style={styles.popup2} onClick={(e) => e.stopPropagation()}>
            <h4>Absences non enregistrées</h4>
            <p style={{ marginTop: "10px" }}>
              Voulez-vous sauvegarder avant de continuer ?
            </p>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div class="buttons-enrg">
                <button
                  className="fermer"
                  onClick={() => {
                    pendingAction?.();
                    setShowConfirmPopup(false);
                    setPendingAction(null);
                    setIsChanged(false);
                  }}
                >
                  Non, continuer
                </button>
                <button
                  className="btnSauvegardeSecondaire"
                  onClick={() => {
                    if (currentSeance)
                      savePresences(currentSeance.id).then(() => {
                        pendingAction?.();
                        setShowConfirmPopup(false);
                        setPendingAction(null);
                      });
                  }}
                >
                  Oui, sauvegarder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {popupSeance && (
        <div style={styles.overlay} onClick={handlePopupClose}>
          {loadingPresences ? (
            <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
              <div className="spinner"></div>
            </div>
          ) : (
            <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
              <h2 className="popup-title">
                {popupSeance.raw
                  ? `${format(new Date(popupSeance.raw.debut), "EEEE", {
                      locale: fr,
                    })} ${format(
                      new Date(popupSeance.raw.debut),
                      "HH:mm"
                    )} - ${format(new Date(popupSeance.raw.fin), "HH:mm")}`
                  : "Séance non définie"}
              </h2>
              <br />
              <br />
              <div className="students-list-container">
                {resolveElevesForSeance(popupSeance).map((st) => {
                  const checked = !!(presences?.[popupSeance.id] || {})[st.id];
                  return (
                    <div key={st.id} className="student-row">
                      <div className="student-info student-info2">
                        <div className="imgProfil">
                          <img
                            src={st.imgProfil || imgParDefaut}
                            alt="profil"
                            width="30px"
                            height="30px"
                          />
                        </div>
                        <div className="student-name">{st.name || st.id}</div>
                      </div>

                      <div className="student-actions">
                        <button
                          className="retardBtn"
                          onClick={() => {
                            setRetardPopUp(true);
                            setStudentName(st.name);
                            setStudentImgUrl(st.imgProfil);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-clock-fading-icon lucide-clock-fading"
                          >
                            <path d="M12 2a10 10 0 0 1 7.38 16.75" />
                            <path d="M12 6v6l4 2" />
                            <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
                            <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
                            <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
                            <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
                          </svg>
                        </button>
                        {retardPopUp && (
                          <div
                            className="retard-overlay"
                            onClick={(e) => {
                              if (
                                e.target.classList.contains("retard-overlay")
                              ) {
                                setRetardPopUp(false);
                              }
                            }}
                          >
                            <div className="retardPopup">
                              <button
                                className="retardCloseBtn"
                                onClick={() => {
                                  setRetardPopUp(false);
                                }}
                              >
                                ×
                              </button>
                              <div className="retardStudentInfo">
                                <span className="retardStudentImg">
                                  <img
                                    src={studentImgUrl || imgParDefaut}
                                    alt="profil"
                                    width={50}
                                    height={50}
                                  />
                                </span>
                                <span className="retardStudentName">
                                  {studentName}
                                </span>
                              </div>
                              <h4 className="retardTitle">
                                Confirmer le retard de l'étudiant
                              </h4>
                              <div className="retardBtns">
                                <button
                                  className="retardConfirm"
                                  onClick={() => {
                                    postRetard(st.id); // Pass the correct student ID
                                    setRetardPopUp(false);
                                  }}
                                >
                                  Confirmer
                                </button>
                                <button
                                  className="retardCancel"
                                  onClick={() => {
                                    setRetardPopUp(false);
                                  }}
                                >
                                  Annuler
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          className="commentBtn"
                          onClick={() => {
                            setCommentPopUp(true);
                            setStudentName(st.name);
                            setStudentImgUrl(st.imgProfil);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-message-circle-more-icon lucide-message-circle-more"
                          >
                            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                            <path d="M8 12h.01" />
                            <path d="M12 12h.01" />
                            <path d="M16 12h.01" />
                          </svg>
                        </button>
                        {commentPopUp && (
                          <div
                            className="comment-overlay"
                            onClick={(e) => {
                              if (
                                e.target.classList.contains("comment-overlay")
                              ) {
                                setCommentPopUp(false);
                              }
                            }}
                          >
                            <div className="commentPopup">
                              <button
                                className="commentCloseBtn"
                                onClick={() => {
                                  setCommentPopUp(false);
                                }}
                              >
                                ×
                              </button>
                              <div className="commentStudentInfo">
                                <span className="commentStudentImg">
                                  <img
                                    src={studentImgUrl || imgParDefaut}
                                    alt="profil"
                                    width={50}
                                    height={50}
                                  />
                                </span>
                                <span className="commentStudentName">
                                  {studentName}
                                </span>
                              </div>
                              <h4 className="commentTitle">
                                Saisir un commentaire
                              </h4>
                              <form className="commentForm">
                                <input
                                  type="text"
                                  className="commentInput"
                                  placeholder="Votre commentaire..."
                                />
                                <div className="commentBtns">
                                  <button
                                    className="commentCancel"
                                    onClick={() => {
                                      setCommentPopUp(false);
                                    }}
                                  >
                                    Fermer
                                  </button>
                                  <button
                                    type="submit"
                                    className="commentSave"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const comment =
                                        document.querySelector(
                                          ".commentInput"
                                        ).value;
                                      postComment(st.id, comment); // Pass the correct student ID
                                      setCommentPopUp(false);
                                    }}
                                  >
                                    Enregistrer le commentaire
                                  </button>
                                </div>
                              </form>

                              <div className="commentsSection">
                                {commentsHtml ? (
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: commentsHtml,
                                    }}
                                  />
                                ) : (
                                  <p>Aucun commentaire trouvé.</p>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        <button className="moreBtn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </button>
                        <label className="toggle">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              togglePresenceForSeance(popupSeance.id, st.id)
                            }
                          />
                          <span className="switch"></span>
                          <span className="toggle-text">
                            {checked ? "Présent" : "Absent"}
                          </span>
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>

              <br />
              <div className="popup-buttons">
                <button
                  className="fermer"
                  onClick={() => {
                    handlePopupClose();
                  }}
                >
                  Fermer
                </button>
                <button className="btnSauvegardeSecondaire" onClick={popupHand}>
                  Enregistrer les absences
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="controls-row">
        <div className="field">
          <label className="field-label">Classe</label>
          <div className="select-wrap">
            <select
              className="select"
              value={selectedClasse || ""}
              onChange={(e) => handleChangeClasse(e.target.value)}
            >
              <option value="">Choisir une classe</option>
              {classes.map((classe) => (
                <option key={classe._id} value={classe._id}>
                  {classe.nom}
                </option>
              ))}
            </select>
          </div>
        </div>

        {teacherNiveau !== "" && teacherNiveau === "secondaire" && (
          <div className="field">
            <label className="field-label">Cours</label>
            <div className="select-wrap">
              <select
                className="select select-fake"
                value=""
                onChange={() => {}}
                aria-disabled="true"
                disabled
              >
                <option value="">Cours indisponible</option>
                <option>Mathématiques</option>
                <option>Français</option>
              </select>
            </div>
          </div>
        )}

        <div className="field">
          <label className="field-label">Mode</label>
          <div className="select-wrap">
            <select
              className="select select-fake"
              value="Présentiel"
              onChange={() => {}}
              aria-disabled="true"
              disabled
            >
              <option>Présentiel</option>
              <option>À distance</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mainSubContainer">
        {teacherNiveau === "secondaire" ? (
          <Calendar
            localizer={localizer}
            culture="fr"
            events={seances}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultView="week"
            style={{ height: "auto" }}
            views={["week", "day", "agenda"]}
            defaultDate={seances[0]?.start || new Date()}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={(event, start, end, isSelected) => {
              let backgroundColor = "#eeecffff";

              return {
                style: {
                  backgroundColor,
                  color: "#7f71fc",
                  borderRadius: "6px",
                  border: "1px solid #dbd7ffff",
                  padding: "0.35rem",
                },
              };
            }}
          />
        ) : (
          <div className="primaireView">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                width: "100%",
                marginBottom: "15px",
              }}
            >
              {todaysSeances.length !== 0 ? (
                <button
                  onClick={() => savePresences(currentSeance.id)}
                  className="goToCurrentDay2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line"
                  >
                    <path d="M12 17V3" />
                    <path d="m6 11 6 6 6-6" />
                    <path d="M19 21H5" />
                  </svg>
                  &nbsp; Enregistrer les absences
                </button>
              ) : (
                <button className="goToCurrentDayDisabled">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line"
                  >
                    <path d="M12 17V3" />
                    <path d="m6 11 6 6 6-6" />
                    <path d="M19 21H5" />
                  </svg>
                  &nbsp; Enregistrer les absences
                </button>
              )}

              <button className="goToCurrentDay" onClick={goToToday}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                &nbsp; Aller à aujourd'hui
              </button>

              <button className="buttonprevNext" onClick={handlePrev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left-icon lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                &nbsp; Précédent
              </button>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  textTransform: "capitalize",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {format(currentDate, "eeee d MMMM yyyy", { locale: fr })}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <button className="buttonprevNext" onClick={handleNext}>
                Suivant &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right-icon lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div>
              {todaysSeances.length === 0 ? (
                <div className="containerOfNoData">
                  <span>Aucune séance prévue pour cette date.</span>
                </div>
              ) : (
                <div className="containerInsider26">
                  {todaysSeances.length > 1 && (
                    <div className="containerOfIdontKnow">
                      <label>
                        Séance:{" "}
                        <select
                          value={selectedSeanceId || ""}
                          onChange={(e) => setSelectedSeanceId(e.target.value)}
                        >
                          {todaysSeances.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.title} ({format(s.start, "HH:mm")} -{" "}
                              {format(s.end, "HH:mm")})
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  )}

                  <div className="students-block">
                    {students.length === 0 ? (
                      <div
                        className="no-data-card"
                        role="status"
                        aria-live="polite"
                      >
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 3v4h4"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          <div className="no-data-title">
                            Aucun élève trouvé pour cette séance.
                          </div>
                          <div className="no-data-sub">
                            Vérifie la classe ou la date sélectionnée.
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="students-list" role="list">
                        {students.map((st) => {
                          const checked = !!(presences?.[currentSeance?.id] ||
                            {})[st.id];
                          return (
                            <li
                              key={st.id}
                              className="student-row"
                              role="listitem"
                            >
                              <div className="student-info">
                                <div class="inf">
                                  <div className="imgProfil2">
                                    <img
                                      src={st.imgProfil || imgParDefaut}
                                      width="40px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="student-name">
                                    {st.name || st.id}
                                  </div>
                                </div>
                                <div className="student-meta">{st.id}</div>
                              </div>

                              <div className="student-action">
                                <button
                                  className="retardBtn"
                                  onClick={() => {
                                    setRetardPopUp(true);
                                    setStudentName(st.name);
                                    setStudentImgUrl(st.imgProfil);
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-clock-fading-icon lucide-clock-fading"
                                  >
                                    <path d="M12 2a10 10 0 0 1 7.38 16.75" />
                                    <path d="M12 6v6l4 2" />
                                    <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
                                    <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
                                    <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
                                    <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
                                  </svg>
                                </button>
                                {retardPopUp && (
                                  <div
                                    className="retard-overlay"
                                    onClick={(e) => {
                                      if (
                                        e.target.classList.contains(
                                          "retard-overlay"
                                        )
                                      ) {
                                        setRetardPopUp(false);
                                      }
                                    }}
                                  >
                                    <div className="retardPopup">
                                      <button
                                        className="retardCloseBtn"
                                        onClick={() => {
                                          setRetardPopUp(false);
                                        }}
                                      >
                                        ×
                                      </button>
                                      <div className="retardStudentInfo">
                                        <span className="retardStudentImg">
                                          <img
                                            src={studentImgUrl || imgParDefaut}
                                            alt="profil"
                                            width={50}
                                            height={50}
                                          />
                                        </span>
                                        <span className="retardStudentName">
                                          {studentName}
                                        </span>
                                      </div>
                                      <h4 className="retardTitle">
                                        Confirmer le retard de l'étudiant
                                      </h4>
                                      <div className="retardBtns">
                                        <button
                                          className="retardConfirm"
                                          onClick={() => {
                                            postRetard(st.id); // Pass the correct student ID
                                            setRetardPopUp(false);
                                          }}
                                        >
                                          Confirmer
                                        </button>
                                        <button
                                          className="retardCancel"
                                          onClick={() => {
                                            setRetardPopUp(false);
                                          }}
                                        >
                                          Annuler
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <button
                                  className="commentBtn"
                                  onClick={() => {
                                    setCommentPopUp(true);
                                    setStudentName(st.name);
                                    setStudentImgUrl(st.imgProfil);
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-message-circle-more-icon lucide-message-circle-more"
                                  >
                                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                                    <path d="M8 12h.01" />
                                    <path d="M12 12h.01" />
                                    <path d="M16 12h.01" />
                                  </svg>
                                </button>
                                {commentPopUp && (
                                  <div
                                    className="comment-overlay"
                                    onClick={(e) => {
                                      if (
                                        e.target.classList.contains(
                                          "comment-overlay"
                                        )
                                      ) {
                                        setCommentPopUp(false);
                                      }
                                    }}
                                  >
                                    <div className="commentPopup">
                                      <button
                                        className="commentCloseBtn"
                                        onClick={() => {
                                          setCommentPopUp(false);
                                        }}
                                      >
                                        ×
                                      </button>
                                      <div className="commentStudentInfo">
                                        <span className="commentStudentImg">
                                          <img
                                            src={studentImgUrl || imgParDefaut}
                                            alt="profil"
                                            width={50}
                                            height={50}
                                          />
                                        </span>
                                        <span className="commentStudentName">
                                          {studentName}
                                        </span>
                                      </div>
                                      <h4 className="commentTitle">
                                        Saisir un commentaire
                                      </h4>
                                      <form className="commentForm">
                                        <input
                                          type="text"
                                          className="commentInput"
                                          placeholder="Votre commentaire..."
                                        />
                                        <div className="commentBtns">
                                          <button
                                            className="commentCancel"
                                            onClick={() => {
                                              setCommentPopUp(false);
                                            }}
                                          >
                                            Fermer
                                          </button>
                                          <button
                                            type="submit"
                                            className="commentSave"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              const comment =
                                                document.querySelector(
                                                  ".commentInput"
                                                ).value;
                                              postComment(st.id, comment); // Pass the correct student ID
                                              setCommentPopUp(false);
                                            }}
                                          >
                                            Enregistrer le commentaire
                                          </button>
                                        </div>
                                      </form>

                                      {/* Render comments directly in the comment popup */}
                                      <div className="commentsSection">
                                        {commentsHtml ? (
                                          <div
                                            dangerouslySetInnerHTML={{
                                              __html: commentsHtml,
                                            }}
                                          />
                                        ) : (
                                          <p>Aucun commentaire trouvé.</p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <button className="moreBtn">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    class="lucide lucide-ellipsis-vertical-icon lucide-ellipsis-vertical"
                                  >
                                    <circle cx="12" cy="12" r="1" />
                                    <circle cx="12" cy="5" r="1" />
                                    <circle cx="12" cy="19" r="1" />
                                  </svg>
                                </button>

                                <label className="toggle">
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() =>
                                      togglePresenceForSeance(
                                        currentSeance.id,
                                        st.id
                                      )
                                    }
                                    aria-checked={checked}
                                  />
                                  <span className="switch" aria-hidden></span>
                                  <div className="toggle-label">
                                    {checked ? "Présent" : "Absent"}
                                  </div>
                                </label>
                              </div>
                            </li>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* <div className="containerOfButton" >
                                <button className="savePresences" onClick={() => savePresences(currentSeance.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                                    &nbsp;
                                    Sauvegarder présences
                                </button>
                            </div> */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(5px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popup: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    borderRadius: "12px",
    minWidth: "320px",
    maxWidth: "90%",
    height: "auto",
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  popup2: {
    backgroundColor: "#fff",
    padding: "2.5rem 3rem",
    borderRadius: "12px",
    minWidth: "320px",
    maxWidth: "90%",
    height: "auto",
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  spinner: {
    marginTop: "20px",
    width: "50px",
    height: "50px",
    border: "6px solid rgba(138, 88, 255, 0.3)",
    borderTopColor: "rgba(138, 88, 255, 1)",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default SuiviPresences;
