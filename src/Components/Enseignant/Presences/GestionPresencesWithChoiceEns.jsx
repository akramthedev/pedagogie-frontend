import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import HeaderCard from "../../Common/Component/HeaderCard";
import SuiviPresences from "./GestionPresences-component/SuiviPresences";

const Presences = () => {
  const [formState, setFormState] = useState({
    date: new Date().toISOString().split("T")[0],
    professeur: "",
    cours: "",
    niveau: "Primaire",
  });

  const [isPrimaire, setIsPrimaire] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [enseignants, setEnseignants] = useState([]);
  const [matieres, setMatieres] = useState([]);
  const [selectedClasseId, setSelectedClasseId] = useState("");

  // Gestion des changements de champs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "niveau") {
      setIsPrimaire(value === "Primaire");
    }
  };

  const handleValidate = () => {
    const { date, professeur, cours } = formState;

    if (date && professeur && (isPrimaire || cours)) {
      const selectedEnseignant = enseignants.find(
        (enseignant) => enseignant.Ens_Id === professeur
      );

      if (selectedEnseignant) {
        const selectedCours = matieres.find(
          (matiere) => matiere.EnsMatCls_Id === cours
        );
        if (selectedCours) {
          setSelectedClasseId(selectedCours.detailsClasse.Cls_Id);
        }
      }
      setShowTable(true);
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  useEffect(() => {
    const getEnseignants = async () => {
      try {
        // const resp = await axios.get(
        //   `http://localhost:3002/api/enseignants/ecole/3FA85F64-5717-4562-B3FC-2C963F66AFA6`
        // );

        const dataEnseignant = [
          {
              "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Ens_Nom": "Awel",
              "Ens_Prenom": "Haoua",
              "Ens_DateNaissance": "1981-11-29T00:00:00.000Z",
              "Ens_LieuNaissance": "agadir",
              "Ens_Photo": {
                  "type": "Buffer",
                  "data": []
              },
              "Ens_CIN": "",
              "Ens_Adresse": "",
              "Ens_Tel": "",
              "Ens_DateRecrutement": "2023-12-28T00:00:00.000Z",
              "matieresEnseignant": [
                  {
                      "EnsMatCls_Id": "DDB0AF1D-5E0D-4472-95AE-AA3E05B281AD",
                      "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                      "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "EnsMat_Description": "Description pour la relation EnsMat",
                      "detailsMatiere": {
                          "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                          "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                          "Mat_Nom": "CEM1-Matiere 2",
                          "Mat_Description": "",
                          "Mat_Nbrcredit": 5,
                          "Mat_Nbrheure": 27,
                          "Mat_Timestamp": null,
                          "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5"
                      },
                      "detailsClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Ens_Nom": "Boulloul",
              "Ens_Prenom": "Mehdi",
              "Ens_DateNaissance": "2006-02-02T00:00:00.000Z",
              "Ens_LieuNaissance": "massaa",
              "Ens_Photo": null,
              "Ens_CIN": "452562152",
              "Ens_Adresse": "Bloc E 171 El Houda, AGADIR",
              "Ens_Tel": "0625002504",
              "Ens_DateRecrutement": "2025-01-01T00:00:00.000Z",
              "matieresEnseignant": []
          },
          {
              "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Ens_Nom": "Amine",
              "Ens_Prenom": "Laghlabi",
              "Ens_DateNaissance": "2025-01-12T00:00:00.000Z",
              "Ens_LieuNaissance": "Agadir",
              "Ens_Photo": null,
              "Ens_CIN": "J529582",
              "Ens_Adresse": "Tilila, Agadir",
              "Ens_Tel": "0601010046",
              "Ens_DateRecrutement": "2025-01-12T00:00:00.000Z",
              "matieresEnseignant": [
                  {
                      "EnsMatCls_Id": "28423808-5E95-4208-A668-832A5E49B7BC",
                      "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                      "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "EnsMat_Description": "Description pour la relation EnsMat",
                      "detailsMatiere": {
                          "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                          "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                          "Mat_Nom": "CEM1-Matiere 2",
                          "Mat_Description": "",
                          "Mat_Nbrcredit": 5,
                          "Mat_Nbrheure": 27,
                          "Mat_Timestamp": null,
                          "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5"
                      },
                      "detailsClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  },
                  {
                      "EnsMatCls_Id": "6425E702-CA32-4E35-9099-EC376B4CAEA7",
                      "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                      "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "EnsMat_Description": "Description pour la relation EnsMat",
                      "detailsMatiere": {
                          "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                          "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                          "Mat_Nom": "CEM1-Matiere 1",
                          "Mat_Description": "",
                          "Mat_Nbrcredit": 2,
                          "Mat_Nbrheure": 19,
                          "Mat_Timestamp": null,
                          "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D"
                      },
                      "detailsClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          }
      ];
        setEnseignants(resp.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des enseignants:", error);
      }
    };
    getEnseignants();
  }, []);

  useEffect(() => {
    const selectedEnseignant = enseignants.find(
      (enseignant) => enseignant.Ens_Id === formState.professeur
    );

    if (selectedEnseignant) {
      const matieres = selectedEnseignant.matieresEnseignant || [];
      setMatieres(matieres);

      if (matieres.length === 1) {
        setFormState((prev) => ({
          ...prev,
          cours: matieres[0].EnsMatCls_Id,
        }));
        setSelectedClasseId(matieres[0].detailsClasse.Cls_Id);
      } else {
        setFormState((prev) => ({ ...prev, cours: "" }));
        setSelectedClasseId("");
      }
    } else {
      setMatieres([]);
      setFormState((prev) => ({ ...prev, cours: "" }));
      setSelectedClasseId("");
    }
  }, [formState.professeur, enseignants]);

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
                <Row form="true">
                  <Col md="2">
                    <FormGroup>
                      <Label for="niveau">Niveau</Label>
                      <Input
                        type="select"
                        id="niveau"
                        name="niveau"
                        value={formState.niveau}
                        onChange={handleInputChange}
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
                        name="date"
                        value={formState.date}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="4">
                    <FormGroup>
                      <Label for="professeur">Professeur</Label>
                      <Input
                        type="select"
                        id="professeur"
                        name="professeur"
                        value={formState.professeur}
                        onChange={handleInputChange}
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
                          name="cours"
                          value={formState.cours}
                          onChange={handleInputChange}
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
                <Button
                  color="primary"
                  className="mt-3"
                  onClick={handleValidate}
                >
                  Valider
                </Button>
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
                    Ens_Id={formState.professeur}
                    Mat_Id={formState.cours}
                    Date_Presence={formState.date}
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
