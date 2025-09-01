import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Row,
  Col,
} from "reactstrap";
import { listeDisciplines } from "./data/listeDisciplines";
// 📌 Liste des niveaux et leurs disciplines avec les durées héritées

// 🎨 Palette de couleurs pour les segments et disciplines
const couleursSegments = [
  "#F3EDF7",
  "#E0D7EB",
  "#CDC0DE",
  "#B9AAD2",
  "#A594C6",
];
const couleursDisciplines = [
  "#EAE6F2",
  "#D5CDE5",
  "#C0B4D9",
  "#AB9BCC",
  "#9682C0",
];

const MaquetteForm = ({ onAjouterMaquette }) => {
  const [niveau, setNiveau] = useState("");
  const [segmentation, setSegmentation] = useState("");
  const [nombreSegments, setNombreSegments] = useState(0);
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    if (niveau && segmentation && nombreSegments > 0) {
      const selectedCycle = listeDisciplines.find(
        (item) => item.cycle === niveau
      );
      if (!selectedCycle) return;

      const newSegments = Array.from({ length: nombreSegments }, (_, i) => ({
        nom: `${segmentation} ${i + 1}`,
        disciplines: selectedCycle.disciplines.map((discipline) => ({
          ...discipline,
          activites: [
            {
              type: "Cours Magistral",
              nbSeances: 10,
              dureeSeance: 2,
              totalHeures: 20,
              evaluation: false,
            },
            {
              type: "Évaluation 1",
              nbSeances: 1,
              dureeSeance: 2,
              coefficient: 1,
              totalHeures: 2,
              evaluation: true,
            },
          ],
        })),
      }));
      setSegments(newSegments);
    }
  }, [niveau, segmentation, nombreSegments]);

  const handleSeanceChange = (segIndex, discIndex, actIndex, field, value) => {
    const updatedSegments = [...segments];
    const activity =
      updatedSegments[segIndex].disciplines[discIndex].activites[actIndex];

    if (field === "coefficient") {
      activity[field] = parseFloat(value) || 1;
    } else if (field === "nbSeances" || field === "dureeSeance") {
      activity[field] = parseInt(value) || 0;
      activity.totalHeures = activity.nbSeances * activity.dureeSeance;
    } else {
      // champs texte comme "type"
      activity[field] = value;
    }

    setSegments(updatedSegments);
  };

  const ajouterMaquette = () => {
    if (
      !niveau ||
      !segmentation ||
      nombreSegments < 1 ||
      segments.length === 0
    ) {
      alert("❌ Veuillez remplir tous les champs pour créer une maquette.");
      return;
    }

    // Création de la nouvelle maquette
    const nouvelleMaquette = {
      id: new Date().getTime(), // Générer un ID unique
      niveau,
      segmentation,
      nombreSegments,
      segments,
    };

    // 🔹 Récupération des maquettes existantes dans localStorage
    const savedData = localStorage.getItem("maquetteData");
    let maquettes = [];

    try {
      maquettes = savedData ? JSON.parse(savedData) : [];
      if (!Array.isArray(maquettes)) {
        maquettes = []; // Protection contre une mauvaise structure des données
      }
    } catch (error) {
      console.error("Erreur de lecture du localStorage:", error);
      alert("❌ Une erreur est survenue lors de la lecture des données.");
      return;
    }

    // 🔹 Ajouter la nouvelle maquette
    maquettes.push(nouvelleMaquette);
    // pour le component maquetteTable
    onAjouterMaquette(maquettes);

    // 🔹 Sauvegarde dans localStorage
    try {
      localStorage.setItem("maquetteData", JSON.stringify(maquettes));
      alert("✅ Maquette créée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
      alert("❌ Une erreur est survenue lors de la sauvegarde.");
      return;
    }

    // 🔹 Réinitialisation du formulaire
    setNiveau("");
    setSegmentation("");
    setNombreSegments(0);
    setSegments([]);
  };

  const supprimerEvaluation = (segIndex, discIndex, actIndex) => {
    const updatedSegments = [...segments];
    if (
      updatedSegments[segIndex].disciplines[discIndex].activites[actIndex]
        .evaluation
    ) {
      updatedSegments[segIndex].disciplines[discIndex].activites.splice(
        actIndex,
        1
      );
      setSegments(updatedSegments);
    }
  };

  // const ajouterEvaluation = () => {
  //   if (
  //     !niveau ||
  //     !segmentation ||
  //     nombreSegments < 1 ||
  //     segments.length === 0
  //   ) {
  //     alert("Veuillez remplir tous les champs pour créer une maquette.");
  //     return;
  //   }

  //   // Création d'une nouvelle maquette
  //   const nouvelleMaquette = {
  //     id: new Date().getTime(), // Générer un ID unique
  //     niveau,
  //     segmentation,
  //     nombreSegments,
  //     segments,
  //   };

  //   // Récupérer les maquettes existantes
  //   const savedData = localStorage.getItem("maquetteData");
  //   let maquettes = savedData ? JSON.parse(savedData) : [];

  //   if (!Array.isArray(maquettes)) {
  //     maquettes = []; // Protection contre une mauvaise structure des données
  //   }

  //   // Ajouter la nouvelle maquette
  //   maquettes.push(nouvelleMaquette);

  //   // Sauvegarde dans localStorage
  //   localStorage.setItem("maquetteData", JSON.stringify(maquettes));

  //   // Réinitialisation du formulaire
  //   setNiveau("");
  //   setSegmentation("");
  //   setNombreSegments(0);
  //   setSegments([]);
  // };

  const ajouterEvaluationPourDiscipline = (segIndex, discIndex) => {
    const updatedSegments = [...segments];
    const discipline = updatedSegments[segIndex].disciplines[discIndex];

    // Compter les évaluations existantes pour nommer la suivante
    const nbEvaluations = discipline.activites.filter(
      (act) => act.evaluation
    ).length;

    discipline.activites.push({
      type: `Évaluation ${nbEvaluations + 1}`,
      nbSeances: 1,
      dureeSeance: 2,
      coefficient: 1,
      totalHeures: 2,
      evaluation: true,
    });

    setSegments(updatedSegments);
  };

  useEffect(() => {
    if (segmentation === "Trimestre") {
      setNombreSegments(3);
    } else if (segmentation === "Semestre") {
      setNombreSegments(2);
    }
  }, [segmentation]);

  return (
    <Form>
      <Row className="mb-3">
        <Col md={4}>
          <FormGroup>
            <Label>Niveau</Label>
            <Input
              type="select"
              value={niveau}
              onChange={(e) => setNiveau(e.target.value)}
              required
            >
              <option value="">Sélectionner un niveau</option>
              {listeDisciplines.map((cycle) => (
                <option key={cycle.id} value={cycle.cycle}>
                  {cycle.cycle}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Segmentation</Label>
            <Input
              type="select"
              value={segmentation}
              onChange={(e) => setSegmentation(e.target.value)}
              required
            >
              <option value="">Sélectionner</option>
              <option value="Trimestre">Trimestre</option>
              <option value="Semestre">Semestre</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Nombre de {segmentation}</Label>
            <Input
              type="number"
              min="1"
              value={nombreSegments}
              onChange={(e) => setNombreSegments(parseInt(e.target.value) || 0)}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      {segments.length > 0 && (
        <Table bordered>
          <thead>
            <tr>
              <th>Discipline</th>
              <th>Activité</th>
              <th>Nb Séances</th>
              <th>Durée/Séance</th>
              <th>Total Heures</th>
              <th>Coefficient</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {segments.map((segment, segIndex) => (
              <React.Fragment key={segIndex}>
                <tr
                  style={{
                    backgroundColor: "#ccc",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <td colSpan="7" style={{ border: "2px solid #000" }}>
                    {segment.nom}
                  </td>
                </tr>

                {segment.disciplines.map((discipline, discIndex) =>
                  discipline.activites.map((activite, actIndex) => (
                    <tr
                      key={`${segIndex}-${discIndex}-${actIndex}`}
                      style={{
                        backgroundColor: activite.evaluation
                          ? "#f2dede"
                          : couleursSegments[
                              segIndex % couleursSegments.length
                            ],
                        borderBottom: "1px solid #000",
                      }}
                    >
                      {actIndex === 0 && (
                        <td
                          rowSpan={discipline.activites.length}
                          style={{
                            backgroundColor:
                              couleursDisciplines[
                                discIndex % couleursDisciplines.length
                              ],
                            fontWeight: "bold",
                          }}
                        >
                          {discipline.nom} ({discipline.duree}h)
                        </td>
                      )}
                      <td>
                        {activite.evaluation ? (
                          <Input
                            type="text"
                            value={activite.type}
                            onChange={(e) =>
                              handleSeanceChange(
                                segIndex,
                                discIndex,
                                actIndex,
                                "type",
                                e.target.value
                              )
                            }
                          />
                        ) : (
                          activite.type
                        )}
                      </td>
                      <td>
                        <Input
                          type="number"
                          value={activite.nbSeances}
                          onChange={(e) =>
                            handleSeanceChange(
                              segIndex,
                              discIndex,
                              actIndex,
                              "nbSeances",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>
                        <Input
                          type="number"
                          value={activite.dureeSeance}
                          onChange={(e) =>
                            handleSeanceChange(
                              segIndex,
                              discIndex,
                              actIndex,
                              "dureeSeance",
                              e.target.value
                            )
                          }
                        />
                      </td>
                      <td>{activite.totalHeures}</td>
                      <td>
                        {activite.evaluation ? (
                          <Input
                            type="number"
                            step="0.1"
                            value={activite.coefficient}
                            onChange={(e) =>
                              handleSeanceChange(
                                segIndex,
                                discIndex,
                                actIndex,
                                "coefficient",
                                e.target.value
                              )
                            }
                          />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>
                        {activite.evaluation && (
                          <Button
                            color="danger"
                            size="sm"
                            onClick={() =>
                              supprimerEvaluation(segIndex, discIndex, actIndex)
                            }
                          >
                            x Retirer
                          </Button>
                        )}
                        <Button
                          color="success"
                          size="sm"
                          onClick={() =>
                            ajouterEvaluationPourDiscipline(segIndex, discIndex)
                          }
                        >
                          + Évaluation
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      )}

      {/* 📌 Added "Créer une Maquette" Button */}
      <Button color="primary" className="mt-3" onClick={ajouterMaquette}>
        Créer une Maquette
      </Button>
    </Form>
  );
};

export default MaquetteForm;
