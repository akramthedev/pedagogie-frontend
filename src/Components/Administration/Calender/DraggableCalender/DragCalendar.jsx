import React, { Component, Fragment } from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import uuid from "react-uuid";

class DragCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarEvents: [], // Liste des événements du calendrier
      maquettes: [], // Liste des maquettes disponibles
      niveau: "", // Niveau sélectionné
      disciplines: [],
    };
  }

  /**
   * Chargement des données au démarrage
   */
  componentDidMount() {
    // Récupération des maquettes depuis localStorage
    const savedMaquettes = localStorage.getItem("maquetteData");
    if (savedMaquettes) {
      try {
        const maquettes = JSON.parse(savedMaquettes);
        if (Array.isArray(maquettes)) {
          this.setState({ maquettes });
        }
      } catch (error) {
        console.error("Erreur de lecture du localStorage (maquettes) :", error);
      }
    }

    // Récupération des événements du calendrier
    const savedEvents = localStorage.getItem("calendarEvents");
    if (savedEvents) {
      try {
        const calendarEvents = JSON.parse(savedEvents);
        if (Array.isArray(calendarEvents)) {
          this.setState({ calendarEvents });
        }
      } catch (error) {
        console.error(
          "Erreur de lecture du localStorage (événements) :",
          error
        );
      }
    }

    // Activer le Drag & Drop
    let draggableEl = document.getElementById("external-events");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          return {
            title: eventEl.getAttribute("title"),
            duration: `0:${eventEl.getAttribute("data-duree")}`,
            id: uuid(),
          };
        },
      });
    }
  }

  /**
   * Sauvegarde les événements dans localStorage
   */
  saveEventsToLocalStorage = () => {
    localStorage.setItem(
      "calendarEvents",
      JSON.stringify(this.state.calendarEvents)
    );
  };

  /**
   * Gérer le choix du niveau et filtrer les disciplines
   */
  handleNiveauChange = (e) => {
    const niveau = e.target.value;
    const { maquettes } = this.state;

    const niveauMaquette = maquettes.find((m) => m.niveau === niveau);

    if (niveauMaquette) {
      const disciplines = niveauMaquette.segments.flatMap((segment) =>
        segment.disciplines.map((discipline) => ({
          ...discipline,
          activites: discipline.activites.map((activite) => ({
            ...activite,
            title: `${activite.type} (${discipline.nom})`,
            id: uuid(),
          })),
        }))
      );

      this.setState({ niveau, disciplines });
    }
  };

  /**
   * Supprime un événement du calendrier
   */
  // eventClick = (eventClick) => {
  //   Swal.fire({
  //     title: eventClick.event.title,
  //     html: `<p>Début: <strong>${moment(eventClick.event.start).format(
  //       "HH:mm"
  //     )}</strong></p>
  //            <p>Fin: <strong>${moment(eventClick.event.end).format(
  //              "HH:mm"
  //            )}</strong></p>`,
  //     showCancelButton: true,
  //     confirmButtonColor: "#d33",
  //     cancelButtonColor: "#3085d6",
  //     confirmButtonText: "Supprimer",
  //     cancelButtonText: "Fermer",
  //   }).then((result) => {
  //     if (result.value) {
  //       eventClick.event.remove();
  //       this.setState(
  //         (prevState) => ({
  //           calendarEvents: prevState.calendarEvents.filter(
  //             (event) => event.id !== eventClick.event.id
  //           ),
  //         }),
  //         this.saveEventsToLocalStorage
  //       );
  //       Swal.fire("Supprimé!", "L'activité a été supprimée.", "success");
  //     }
  //   });
  // };

  eventClick = (eventClick) => {
    const event = eventClick.event;
  
    Swal.fire({
      title: `📚 ${event.title}`,
      html: `
        <p><strong>📅 Date :</strong> ${moment(event.start).format("DD/MM/YYYY")}</p>
        <p><strong>🕒 Horaire :</strong> ${moment(event.start).format("HH:mm")} - ${moment(event.end).format("HH:mm")}</p>
        <p><strong>🏫 Salle :</strong> 
          <select id="salle" class="swal2-input">
            <option value="${event.extendedProps.salle || ''}" selected>${event.extendedProps.salle || 'À définir'}</option>
            <option value="Salle 101">Salle 101</option>
            <option value="Salle 202">Salle 202</option>
            <option value="Salle 303">Salle 303</option>
          </select>
        </p>
        <p><strong>🎓 Professeur :</strong> 
          <select id="professeur" class="swal2-input">
            <option value="${event.extendedProps.professeur || ''}" selected>${event.extendedProps.professeur || 'À définir'}</option>
            <option value="Prof. Dupont">Prof. Dupont</option>
            <option value="Prof. Martin">Prof. Martin</option>
          </select>
        </p>
      `,
      showCancelButton: true,
      confirmButtonText: "Enregistrer",
      cancelButtonText: "Fermer",
    }).then((result) => {
      if (result.isConfirmed) {
        const newSalle = document.getElementById("salle").value;
        const newProfesseur = document.getElementById("professeur").value;
        
        // Mise à jour des informations de l'événement
        event.setExtendedProp("salle", newSalle);
        event.setExtendedProp("professeur", newProfesseur);
        
        // Mise à jour du statut de confirmation
        if (newSalle && newProfesseur) {
          event.setExtendedProp("status", "confirmé");
          event.setProp("backgroundColor", "#4d79ff");
          event.setProp("borderColor", "#0033cc");
        }
  
        // Mise à jour du localStorage
        this.setState(
          (prevState) => ({
            calendarEvents: prevState.calendarEvents.map((e) =>
              e.id === event.id
                ? { ...e, salle: newSalle, professeur: newProfesseur, status: newSalle && newProfesseur ? "confirmé" : "en attente" }
                : e
            ),
          }),
          this.saveEventsToLocalStorage
        );
      }
    });
  };
    
  /**
   * Ajout d'un événement après un Drag & Drop
   */

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;

  //   if (!title) return;

  //   const newEvent = {
  //     title,
  //     start: info.date,
  //     end: moment(info.date).add(duree, "hours").toDate(),
  //     id: uuid(),
  //   };

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, newEvent],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
  //   const nbSeances =
  //     parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;

  //   if (!title) return;

  //   let newEvents = [];
  //   let currentDate = moment(info.date);

  //   for (let i = 0; i < nbSeances; i++) {
  //     newEvents.push({
  //       title,
  //       start: currentDate.toDate(),
  //       end: currentDate.add(duree, "hours").toDate(),
  //       id: uuid(),
  //     });

  //     // Passer à la semaine suivante pour la prochaine séance (ex: chaque lundi)
  //     currentDate = currentDate.add(1, "weeks");
  //   }

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, ...newEvents],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
  //   const nbSeances =
  //     parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;
  //   const isEvaluation =
  //     info.draggedEl.getAttribute("data-evaluation") === "true"; // Récupération du statut d'évaluation

  //   if (!title) return;

  //   let newEvents = [];
  //   let currentDate = moment(info.date);

  //   for (let i = 0; i < nbSeances; i++) {
  //     newEvents.push({
  //       title,
  //       start: currentDate.toDate(),
  //       end: currentDate.add(duree, "hours").toDate(),
  //       id: uuid(),
  //       backgroundColor: isEvaluation ? "#ff4d4d" : "#4d79ff", // 🔴 Évaluation | 🔵 Autre cours
  //       borderColor: isEvaluation ? "#cc0000" : "#0033cc", // Bordures plus foncées
  //     });

  //     // Passer à la semaine suivante pour la prochaine séance (ex: chaque lundi)
  //     currentDate = currentDate.add(1, "weeks");
  //   }

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, ...newEvents],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
  //   const nbSeances = parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;
  //   const isEvaluation = info.draggedEl.getAttribute("data-evaluation") === "true";
  //   const niveau = this.state.niveau; // Associer au niveau sélectionné

  //   if (!title) return;

  //   let newEvents = [];
  //   let currentDate = moment(info.date);

  //   for (let i = 0; i < nbSeances; i++) {
  //     // Vérification des conflits d'horaire
  //     // eslint-disable-next-line no-loop-func
  //     const conflict = this.state.calendarEvents.some((event) =>
  //       moment(event.start).isSame(currentDate, "day") &&
  //       moment(event.start).hour() === currentDate.hour()
  //     );

  //     if (conflict) {
  //       Swal.fire("Conflit détecté!", "Un autre cours est déjà prévu à cet horaire.", "warning");
  //       return;
  //     }

  //     newEvents.push({
  //       id: uuid(),
  //       title,
  //       start: currentDate.toDate(),
  //       end: currentDate.add(duree, "hours").toDate(),
  //       backgroundColor: isEvaluation ? "#ff4d4d" : "#4d79ff",
  //       borderColor: isEvaluation ? "#cc0000" : "#0033cc",
  //       niveau, // Ajout du niveau associé
  //       isEvaluation,
  //       dureeSeance: duree,
  //       nbSeances,
  //     });

  //     // Passer à la semaine suivante pour la prochaine séance
  //     currentDate = currentDate.add(1, "weeks");
  //   }

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, ...newEvents],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  handleEventReceive = (info) => {
    const title = info.draggedEl.getAttribute("title");
    const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
    const nbSeances =
      parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;
    const isEvaluation =
      info.draggedEl.getAttribute("data-evaluation") === "true";
    const niveau = this.state.niveau; // Associer au niveau sélectionné

    if (!title) return;

    let currentDate = moment(info.date);
    const heureDebut = moment(info.date).format("HH:mm");

    // Vérification des conflits sur même horaire et même salle
    const hasConflict = (salle) => {
      return this.state.calendarEvents.some(
        (event) =>
          moment(event.start).isSame(currentDate, "day") &&
          moment(event.start).hour() === currentDate.hour() &&
          event.salle === salle // Vérifier si la salle est identique
      );
    };

    // Ouvrir un modal pour choisir la salle et le professeur
    Swal.fire({
      title: `Configurer ${title}`,
      html: `
        <label for="professeur">Sélectionner un Professeur :</label>
        <select id="professeur" class="swal2-input">
          <option value="">À définir</option>
          <option value="Prof. Dupont">Prof. Dupont</option>
          <option value="Prof. Martin">Prof. Martin</option>
        </select>
        <br>
        <label for="salle">Sélectionner une Salle :</label>
        <select id="salle" class="swal2-input">
          <option value="">À définir</option>
          <option value="Salle 101">Salle 101</option>
          <option value="Salle 202">Salle 202</option>
          <option value="Salle 303">Salle 303</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: "Confirmer",
      cancelButtonText: "Différer",
    }).then((result) => {
      const professeur = document.getElementById("professeur").value;
      const salle = document.getElementById("salle").value;

      let newEvents = [];
      for (let i = 0; i < nbSeances; i++) {
        if (salle && hasConflict(salle)) {
          Swal.fire(
            "Conflit détecté!",
            `Un autre cours est déjà prévu à cet horaire dans ${salle}.`,
            "warning"
          );
          return;
        }

        newEvents.push({
          id: uuid(),
          title,
          start: moment(currentDate)
            .hour(heureDebut.split(":")[0])
            .minute(heureDebut.split(":")[1])
            .toDate(),
          end: moment(currentDate)
            .hour(heureDebut.split(":")[0])
            .minute(heureDebut.split(":")[1])
            .add(duree, "hours")
            .toDate(),
          backgroundColor: isEvaluation
            ? "#ff4d4d"
            : professeur && salle
            ? "#4d79ff"
            : "#ffa500", // 🔴 Évaluation | 🔵 Confirmé | 🟠 En attente
          borderColor: isEvaluation
            ? "#cc0000"
            : professeur && salle
            ? "#0033cc"
            : "#b36b00",
          niveau,
          isEvaluation,
          dureeSeance: duree,
          nbSeances,
          professeur: professeur || "À définir",
          salle: salle || "À définir",
          status: professeur && salle ? "confirmé" : "en attente",
        });

        currentDate = currentDate.add(1, "weeks");
      }

      this.setState(
        (prevState) => ({
          calendarEvents: [...prevState.calendarEvents, ...newEvents],
        }),
        this.saveEventsToLocalStorage
      );
    });
  };

  /**
   * Mise à jour des événements après déplacement ou redimensionnement
   */
  // handleEventChange = (changeInfo) => {
  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: prevState.calendarEvents.map((event) =>
  //         event.id === changeInfo.event.id
  //           ? {
  //               ...event,
  //               start: changeInfo.event.start,
  //               end: changeInfo.event.end,
  //             }
  //           : event
  //       ),
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  handleEventChange = (changeInfo) => {
    this.setState(
      (prevState) => ({
        calendarEvents: prevState.calendarEvents.map((event) =>
          event.id === changeInfo.event.id
            ? {
                ...event,
                start: changeInfo.event.start,
                end: changeInfo.event.end,
              }
            : event
        ),
      }),
      this.saveEventsToLocalStorage
    );
  };

  render() {
    const { maquettes, niveau, disciplines } = this.state;

    return (
      <Fragment>
        {/* Sélection du niveau */}
        <Row className="mb-3">
          <Col md={4}>
            <FormGroup>
              <Label for="niveauSelect">Sélectionner un Niveau</Label>
              <Input
                type="select"
                id="niveauSelect"
                value={niveau}
                onChange={this.handleNiveauChange}
              >
                <option value="">-- Choisir un niveau --</option>
                {maquettes.map((maquette) => (
                  <option key={maquette.id} value={maquette.niveau}>
                    {maquette.niveau}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* Liste des activités à glisser */}
        <Col xxl="3" className="box-col-12">
          <div
            id="external-events"
            style={{
              maxHeight: "600px",
              overflowY: "auto",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <h4>📚 Activités disponibles</h4>
            {disciplines.flatMap((discipline) =>
              discipline.activites.map((activite) => {
                const plannedSessions = this.state.calendarEvents.filter(
                  (event) => event.title === activite.title
                );
                const isConfirmed =
                  plannedSessions.length > 0 &&
                  plannedSessions.every((event) => event.status === "confirmé");
                const isPending =
                  plannedSessions.length > 0 &&
                  plannedSessions.some(
                    (event) => event.status === "en attente"
                  );

                return (
                  <div
                    key={activite.id}
                    className="fc-event"
                    title={activite.title}
                    data-duree={activite.dureeSeance}
                    data-nbSeances={activite.nbSeances}
                    data-evaluation={activite.evaluation}
                    style={{
                      backgroundColor: activite.evaluation
                        ? "#ff4d4d"
                        : isConfirmed
                        ? "#4d79ff"
                        : isPending
                        ? "#ffa500"
                        : "#4d79ff",
                      color: "#fff",
                      padding: "8px",
                      borderRadius: "5px",
                      marginBottom: "5px",
                      cursor: "pointer",
                      opacity: plannedSessions.length > 0 ? 0.5 : 1,
                      position: "relative",
                    }}
                  >
                    <div className="fc-event-main">
                      📖 {activite.title} <br />⏳ {activite.dureeSeance}h | 🔄{" "}
                      {activite.nbSeances} séances
                    </div>
                    {isConfirmed && (
                      <span
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "#000",
                          color: "#fff",
                          padding: "2px 5px",
                          fontSize: "10px",
                          borderRadius: "3px",
                        }}
                      >
                        ✅ Confirmé
                      </span>
                    )}
                    {isPending && (
                      <span
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "#b36b00",
                          color: "#fff",
                          padding: "2px 5px",
                          fontSize: "10px",
                          borderRadius: "3px",
                        }}
                      >
                        🚧 À compléter
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </Col>

        {/* Calendrier */}
        <Col xxl="9" className="box-col-12">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            editable={true}
            droppable={true}
            events={this.state.calendarEvents}
            eventClick={this.eventClick}
            drop={this.handleEventReceive}
            eventChange={this.handleEventChange}
          />
        </Col>
      </Fragment>
    );
  }
}

export default DragCalendar;
