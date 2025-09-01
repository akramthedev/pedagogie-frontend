import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import HeaderCard from "../../../Common/Component/HeaderCard";
import SuiviPresences from "./SuiviPresences";

const Presences = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedProfesseur, setSelectedProfesseur] = useState("");
  const [selectedCours, setSelectedCours] = useState("");
  const [selectedClasseId, setSelectedClasseId] = useState("");
  const [isPrimaire, setIsPrimaire] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [enseignants, setEnseignants] = useState([]);
  const [matieres, setMatieres] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedProfesseur && (isPrimaire || selectedCours)) {
      setShowTable(true);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  useEffect(() => {
    const getEnseignants = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:3002/api/enseignants/ecole/3FA85F64-5717-4562-B3FC-2C963F66AFA6`
        );
        setEnseignants(resp.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des enseignants:", error);
      }
    };
    getEnseignants();
  }, []);

  useEffect(() => {
    if (selectedProfesseur) {
      const selectedEnseignant = enseignants.find(
        (enseignant) => enseignant.Ens_Id === selectedProfesseur
      );

      if (selectedEnseignant) {
        const matieres = selectedEnseignant.matieresEnseignant || [];
        setMatieres(matieres);

        if (matieres.length === 1) {
          setSelectedCours(matieres[0].EnsMatCls_Id);
          setSelectedClasseId(matieres[0].detailsClasse.Cls_Id);
        } else {
          setSelectedCours("");
          setSelectedClasseId("");
        }
      }
    } else {
      setMatieres([]);
      setSelectedCours("");
      setSelectedClasseId("");
    }

    console.log("params", selectedCours, selectedClasseId, selectedProfesseur)
  }, [selectedProfesseur, enseignants]);

  useEffect(() => {
    if (selectedCours) {
      const selectedMatiere = matieres.find((matiere) => matiere.EnsMatCls_Id === selectedCours);
      if (selectedMatiere) {
        setSelectedClasseId(selectedMatiere.detailsClasse.Cls_Id);
      }
    }
    console.log("params 2", selectedCours, selectedClasseId, selectedProfesseur)
  }, [selectedCours, matieres]);

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Saisie des Présences"
        parent="Enseignant"
        title="Saisie des Présences"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  <Row form="true">
                    <Col md="2">
                      <FormGroup>
                        <Label for="niveau">Niveau</Label>
                        <Input
                          type="select"
                          id="niveau"
                          value={isPrimaire ? "Primaire" : "Secondaire"}
                          onChange={(e) =>
                            setIsPrimaire(e.target.value === "Primaire")
                          }
                        >
                          <option value="Primaire">Primaire</option>
                          <option value="Secondaire">Secondaire</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                          type="date"
                          id="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label for="professeur">Professeur</Label>
                        <Input
                          type="select"
                          id="professeur"
                          value={selectedProfesseur}
                          onChange={(e) =>
                            setSelectedProfesseur(e.target.value)
                          }
                        >
                          <option value="">Sélectionnez un professeur</option>
                          {enseignants.map((enseignant) => (
                            <option
                              key={enseignant.Ens_Id}
                              value={enseignant.Ens_Id}
                            >
                              {enseignant.Ens_Nom} {enseignant.Ens_Prenom}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                    {!isPrimaire && matieres.length > 1 && (
                      <Col md="4">
                        <FormGroup>
                          <Label for="cours">Cours</Label>
                          <Input
                            type="select"
                            id="cours"
                            value={selectedCours}
                            onChange={(e) => setSelectedCours(e.target.value)}
                          >
                            <option value="">Sélectionnez un cours</option>
                            {matieres.map((matiere) => (
                              <option
                                key={matiere.EnsMatCls_Id}
                                value={matiere.EnsMatCls_Id}
                              >
                                {matiere.detailsMatiere.Mat_Nom} -{" "}
                                {matiere.detailsClasse.Cls_Nom}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    )}
                  </Row>
                  <Button color="primary" type="submit" className="mt-3">
                    Valider
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {showTable && (
          <Row>
            <Col sm="12">
              <Card>
                <HeaderCard title="Effectuez l'appel des élèves" />
                <CardBody>
                  <SuiviPresences
                    Cls_Id={selectedClasseId}
                    Ens_Id={selectedProfesseur}
                    Mat_Id={selectedCours}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
};

export default Presences;
