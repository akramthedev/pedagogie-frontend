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
import femme from "../../assets/images/user/woman.png"; // Image par défaut
import homme from "../../assets/images/user/man.png"; // Image par défaut
import noimage from "../../assets/images/user/noimage.png"; // Image par défaut
import PresenceAbsenceChart from "./FIcheEtudiant-component/PresenceAbsenceChart";
import RetardAppreciationChart from "./FIcheEtudiant-component/RetardAppreciationChart";

const FicheEtudiant = ({ student }) => {
  //   if (!student) return null;

  const [pedagogicData, setPedagogicData] = useState({});
  const showRow = false;

  useEffect(() => {
    const getEnseignants = async () => {
      try {
        // const resp = await axios.get(
        //   `http://localhost:3002/api/etudiants/pedagogique/${student.Etd_Id}`
        // );
        const dataExample = [];
        setPedagogicData(dataExample);
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
          <Card style={{ marginBottom: "5px" }}>
            <CardHeader>
              <CardTitle tag="h5" className="text-center mb-0">
                Dossier Pédagogique
              </CardTitle>
            </CardHeader>
            <CardBody style={{ padding: "5px" }}>
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
                        <p className="mb-1">
                        <strong>Prénom:</strong> <small>{student.Etd_Prenom}</small>
                        </p>
                        <p className="mb-1">
                        <strong>Nom:</strong> <small>{student.Etd_Nom}</small>
                        </p>
                        <p className="mb-1">
                        <strong>Sexe:</strong> <small>{student.sexeEtudiant?.Sex_Nom}</small>
                        </p>
                    </Col>
                    <Col md="3">
                        <p className="mb-1">
                        <strong>Date naissance:</strong>{" "}
                        <small>{new Date(student.Etd_DateNaissance).toLocaleDateString()}</small>
                        </p>
                        <p className="mb-1">
                        <strong>Âge:</strong>{" "}
                        <small>
                            {Math.floor(
                            (new Date() - new Date(student.Etd_DateNaissance)) / (365.25 * 24 * 60 * 60 * 1000)
                            )}{" "}
                            ans
                        </small>
                        </p>
                        <p className="mb-1">
                        <strong>Lieu naissance:</strong> <small>{student.Etd_LieuNaissance}</small>
                        </p>
                    </Col>
                    <Col md="3">
                        <p className="mb-1">
                        <strong>Adresse:</strong> <small>{student.Etd_Adresse}</small>
                        </p>
                        <p className="mb-1">
                        <strong>Remarque:</strong> <small>{student.Etd_Remarque}</small>
                        </p>
                        <p className="mb-1">
                        <strong>Classe:</strong> <small>{student.classesEtudiant[0].AnneeClasse?.Cls_Nom}</small>
                        </p>
                    </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Gestion pédagogique */}
      <Row className="mt-4">
        <Col md="12">
            <Card>
            <CardHeader>
                <CardTitle tag="h5" className="text-center mb-0">
                Statistiques générales
                </CardTitle>
            </CardHeader>
            <CardBody>
                {/* KPI Section */}
                <Row className="text-center">
                <Col md="2">
                    <h6>Présences</h6>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "green" }}>
                    {pedagogicData.presences || 0}
                    </p>
                </Col>
                <Col md="2">
                    <h6>Absences</h6>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "red" }}>
                    {pedagogicData.absences || 0}
                    </p>
                </Col>
                <Col md="2">
                    <h6>Taux d'Absence</h6>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: pedagogicData.tauxAbsence > 10 ? "red" : "black" }}>
                    {pedagogicData.tauxAbsence || "0.00%"}
                    </p>
                </Col>
                <Col md="2">
                    <h6>Retards</h6>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: pedagogicData.retardCount >= 3 ? "orange" : "black" }}>
                    {pedagogicData.retardCount || 0}
                    </p>
                </Col>
                <Col md="2">
                    <h6>Minutes de Retard</h6>
                    <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {pedagogicData.retardMinutes || 0} min
                    </p>
                </Col>
                <Col md="2">
                    <h6>Profil de l'Élève</h6>
                    <p style={{ fontSize: "1.3rem", fontWeight: "bold", color: "blue" }}>
                    {pedagogicData.profil || "N/A"}
                    </p>
                </Col>
                </Row>

                {/* Graphiques */}
                <Row className="mt-4">
                <Col md="6">
                    <h6 className="text-center">Présences et Absences</h6>
                    <div className="chart-container">
                    <PresenceAbsenceChart
                        presences={pedagogicData.presences || 0}
                        absences={pedagogicData.absences || 0}
                    />
                    </div>
                </Col>
                <Col md="6">
                    <h6 className="text-center">Retards et Comportement</h6>
                    <div className="chart-container">
                    <RetardAppreciationChart
                        retardCount={pedagogicData.retardCount || 0}
                        retardMinutes={pedagogicData.retardMinutes || 0}
                        comportementSummary={pedagogicData.comportementSummary || {}}
                    />
                    </div>
                </Col>
                </Row>
            </CardBody>
            </Card>
        </Col>
        </Row>

{/* Tableau des presences */}
<Row>
  <Col md="12">
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="text-center mb-0">
          Details Présences
        </CardTitle>
      </CardHeader>
      <CardBody style={{ padding: "5px" }}>
        <Table bordered striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Status</th>
              <th>Retard</th>
              <th>Retard Minutes</th>
              <th>Appreciation</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {pedagogicData.data?.map((presence, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{presence?.Date_Presence || "N/A"}</td>
                <td>{presence?.Presence_Status || "N/A"}</td>
                <td>{presence.Retard ? "Oui" : "Non"}</td>
                <td>{presence?.Retard ? presence?.Retard_Minutes +" min" : "N/A"}</td>
                <td>{presence?.Comportement || "N/A"}</td>
                <td>{presence?.Appreciation || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
</Row>

    </Container>
  );
};

export default FicheEtudiant;
