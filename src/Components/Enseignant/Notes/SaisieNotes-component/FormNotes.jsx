import React, { useState, useEffect } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const FormNotes = ({ onAddNote }) => {
  const [formValues, setFormValues] = useState({
    classe: "",
    matiere: "",
    etudiant: "",
    note: "",
  });
  const [classes, setClasses] = useState([]);
  const [matieres, setMatieres] = useState([]);
  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    // Simuler des données ou récupérer via API
    setClasses(["Classe 1", "Classe 2", "Classe 3"]);
    setMatieres(["Mathématiques", "Physique", "Informatique"]);
    setEtudiants(["John Doe", "Jane Smith", "Alice Brown"]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.classe && formValues.matiere && formValues.etudiant && formValues.note) {
      onAddNote(formValues);
      setFormValues({ classe: "", matiere: "", etudiant: "", note: "" });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="3">
          <FormGroup>
            <Label for="classe">Classe</Label>
            <Input
              type="select"
              id="classe"
              name="classe"
              value={formValues.classe}
              onChange={handleChange}
            >
              <option value="">Sélectionnez une classe</option>
              {classes.map((classe) => (
                <option key={classe} value={classe}>
                  {classe}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <Label for="matiere">Matière</Label>
            <Input
              type="select"
              id="matiere"
              name="matiere"
              value={formValues.matiere}
              onChange={handleChange}
            >
              <option value="">Sélectionnez une matière</option>
              {matieres.map((matiere) => (
                <option key={matiere} value={matiere}>
                  {matiere}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <Label for="etudiant">Étudiant</Label>
            <Input
              type="select"
              id="etudiant"
              name="etudiant"
              value={formValues.etudiant}
              onChange={handleChange}
            >
              <option value="">Sélectionnez un étudiant</option>
              {etudiants.map((etudiant) => (
                <option key={etudiant} value={etudiant}>
                  {etudiant}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="3">
          <FormGroup>
            <Label for="note">Note</Label>
            <Input
              type="number"
              id="note"
              name="note"
              value={formValues.note}
              onChange={handleChange}
              min="0"
              max="20"
              placeholder="Note"
            />
          </FormGroup>
        </Col>
        <Col md="1" className="d-flex align-items-end">
          <Button color="primary" type="submit">
            Ajouter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormNotes;
