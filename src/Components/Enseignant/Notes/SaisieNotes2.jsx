import React, { Fragment, useState } from "react";
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
import SaisieNotesGeneral from "./SaisieNotes2-component/SaisieNotesGeneral";

const SaisieNotes = () => {
  const Enseignant_Id = localStorage.getItem("eduos_id");
  const [selectedEvaluation, setSelectedEvaluation] = useState("");
  const [showTable, setShowTable] = useState(false);

  // 📌 Données fictives pour les évaluations
  const evaluations = [
    { Eval_Id: "1", Matiere: "Mathématiques", Classe: "6ème A", Bareme: 20 },
    { Eval_Id: "2", Matiere: "Français", Classe: "6ème A", Bareme: 20 },
    { Eval_Id: "3", Matiere: "Histoire", Classe: "5ème B", Bareme: 10 },
  ];

  // Gestion de la sélection d'une évaluation
  const handleEvaluationChange = (e) => {
    setSelectedEvaluation(e.target.value);
  };

  // Validation et affichage du tableau de saisie des notes
  const handleValidate = () => {
    if (selectedEvaluation) {
      setShowTable(true);
    } else {
      alert("Veuillez sélectionner une évaluation.");
    }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Saisie des notes" parent="Enseignant" title="Saisie des notes" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Row form>
                  <Col xs="12" sm="6">
                    <FormGroup>
                      <Label for="evaluation">Sélectionnez une évaluation</Label>
                      <Input
                        type="select"
                        id="evaluation"
                        name="evaluation"
                        value={selectedEvaluation}
                        onChange={handleEvaluationChange}
                      >
                        <option value="">-- Choisir une évaluation --</option>
                        {evaluations.map((evalItem) => (
                          <option key={evalItem.Eval_Id} value={evalItem.Eval_Id}>
                            {evalItem.Matiere} - {evalItem.Classe} (Barème: {evalItem.Bareme})
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Button color="primary" className="mt-3" onClick={handleValidate}>
                  Valider
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* 📌 Affichage de la saisie des notes après validation */}
        {showTable && (
          <Row>
            <Col sm="12">
              <Card>
                {/* <HeaderCard title="Saisie des notes des élèves" /> */}
                <CardBody>
                  <SaisieNotesGeneral 
                  Eval_Id={selectedEvaluation} 
                  Cls_Id="5B35EDB2-484B-4898-B9F1-4065BE1B2B46"
                  Ens_Id={Enseignant_Id}
                  Mat_Id="28423808-5E95-4208-A668-832A5E49B7BC"
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

export default SaisieNotes;
