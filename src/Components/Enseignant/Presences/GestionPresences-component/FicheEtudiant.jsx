import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Table,
} from "reactstrap";
import femme from "../../../../assets/images/user/woman.png"; // Image par défaut
import homme from "../../../../assets/images/user/man.png"; // Image par défaut
import noimage from "../../../../assets/images/user/noimage.png"; // Image par défaut
import PresenceAbsenceChart from "./PresenceAbsenceChart";
import RetardAppreciationChart from "./RetardAppreciationChart";

const FicheEtudiant = ({ student }) => {
  //   if (!student) return null;

  const [pedagogicData, setPedagogicData] = useState({});
  const showRow = false;

  useEffect(() => {
    const getEnseignants = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:3002/api/etudiants/pedagogique/${student.Etd_Id}`
        );
        setPedagogicData(resp.data);
        console.log("pedagogicData", pedagogicData);
      } catch (error) {
        console.error("Erreur lors de la récupération des enseignants:", error);
      }
    };
    getEnseignants();
  }, []);

  return (
    <Container className="mt-4">
      {/* Informations générales */}
      <Row>
        <Col md="12">
          <Card style={{ marginBottom: "15px" }}>
            <CardHeader>
              <CardTitle tag="h5" className="text-center mb-0">
                Fiche Étudiant
              </CardTitle>
            </CardHeader>
            <CardBody style={{ padding: "15px" }}>
              <Row>
                <Col md="3" className="text-center">
                  <img
                    src={
                      student.Etd_Photo
                        ? student.Etd_Photo
                        : student.sexeEtudiant?.Sex_Nom === "Feminin"
                        ? femme // Image par défaut pour les femmes
                        : student.sexeEtudiant?.Sex_Nom === "Masculin"
                        ? homme // Image par défaut pour les hommes
                        : noimage // Image générale par défaut
                    }
                    alt={`${student.Etd_Nom} ${student.Etd_Prenom}`}
                    className="rounded-circle"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  />
                </Col>
                <Col md="3">
                  <p>
                    <strong>Prénom:</strong> {student.Etd_Prenom}
                  </p>
                  <p>
                    <strong>Nom:</strong> {student.Etd_Nom}
                  </p>
                  <p>
                    <strong>Sexe:</strong> {student.sexeEtudiant?.Sex_Nom}
                  </p>
                </Col>
                <Col md="3">
                  <p>
                    <strong>Date de naissance:</strong>{" "}
                    {new Date(student.Etd_DateNaissance).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Âge:</strong>{" "}
                    {Math.floor((new Date() - new Date(student.Etd_DateNaissance)) / (365.25 * 24 * 60 * 60 * 1000))} ans
                  </p>
                  <p>
                    <strong>Lieu de naissance:</strong>{" "}
                    {student.Etd_LieuNaissance}
                  </p>
                </Col>
                <Col md="3">
                  <p>
                    <strong>Adresse:</strong> {student.Etd_Adresse}
                  </p>
                  <p>
                    <strong>Remarque:</strong> {student.Etd_Remarque}
                  </p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Tableau des classes */}
      <Row>
        <Col md="12">
          <Card style={{ marginBottom: "15px" }}>
            <CardHeader>
              <CardTitle tag="h5" className="text-center mb-0">
                Liste des Classes
              </CardTitle>
            </CardHeader>
            <CardBody style={{ padding: "15px" }}>
              <Table bordered striped responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Classe</th>
                    <th>Année</th>
                  </tr>
                </thead>
                <tbody>
                  {student.classesEtudiant?.map((classe, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{classe.AnneeClasse?.Cls_Nom || "N/A"}</td>
                      <td>{classe.AnneeClasse?.Ann_Id || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Tableau des tuteurs */}
      {showRow && (
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5" className="text-center mb-0">
                Liste des Tuteurs
              </CardTitle>
            </CardHeader>
            <CardBody style={{ padding: "15px" }}>
              <Table bordered striped responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {student.etudiantTuteurs?.map((tuteur, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{tuteur.TuteurEtudiant?.Tut_Nom || "N/A"}</td>
                      <td>{tuteur.TuteurEtudiant?.Tut_Prenom || "N/A"}</td>
                      <td>{tuteur.TuteurEtudiant?.Tut_Tel || "N/A"}</td>
                      <td>{tuteur.TuteurEtudiant?.Tut_Mail || "N/A"}</td>
                      <td>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={() =>
                            alert(
                              `Contacter ${tuteur.TuteurEtudiant?.Tut_Prenom}`
                            )
                          }
                        >
                          Contacter
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      )}

      {/* Gestion pédagogique */}
      <Row className="mt-4">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h5" className="text-center mb-0">
                Gestion Pédagogique
              </CardTitle>
            </CardHeader>
            <CardBody>
              {/* KPI Section */}
              <Row className="text-center">
                <Col md="3">
                  <h6>Présences</h6>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {pedagogicData.presences || 0}
                  </p>
                </Col>
                <Col md="3">
                  <h6>Absences</h6>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {pedagogicData.absences || 0}
                  </p>
                </Col>
                <Col md="3">
                  <h6>Minutes de Retard</h6>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {pedagogicData.retardMinutes || 0} min
                  </p>
                </Col>
                <Col md="3">
                  <h6>Appréciation Moyenne</h6>
                  <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {pedagogicData.appreciation || "N/A"}
                  </p>
                </Col>
              </Row>

              {/* Graphiques */}
              <Row className="mt-4">
                <Col md="6">
                  <h6 className="text-center">Présences et Absences</h6>
                  <div className="chart-container">
                    {/* Diagramme circulaire pour Présences/Absences */}
                    <PresenceAbsenceChart
                      presences={pedagogicData.presences || 0}
                      absences={pedagogicData.absences || 0}
                    />
                  </div>
                </Col>
                <Col md="6">
                  <h6 className="text-center">
                    Retards et Notes d'Appréciation
                  </h6>
                  <div className="chart-container">
                    {/* Histogramme pour Retards et Appréciations */}
                    <RetardAppreciationChart
                      retardMinutes={pedagogicData.retardMinutes || 0}
                      appreciation={pedagogicData.appreciation || "N/A"}
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FicheEtudiant;
