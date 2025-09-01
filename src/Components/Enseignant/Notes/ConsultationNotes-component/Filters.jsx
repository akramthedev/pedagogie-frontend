import React, { useState, useEffect } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Filters = ({ onFilterChange }) => {
  const [filterValues, setFilterValues] = useState({
    classe: "",
    matiere: "",
    etudiant: "",
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
    setFilterValues({ ...filterValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filterValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md="4">
          <FormGroup>
            <Label for="classe">Classe</Label>
            <Input
              type="select"
              id="classe"
              name="classe"
              value={filterValues.classe}
              onChange={handleChange}
            >
              <option value="">Toutes les classes</option>
              {classes.map((classe) => (
                <option key={classe} value={classe}>
                  {classe}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="matiere">Matière</Label>
            <Input
              type="select"
              id="matiere"
              name="matiere"
              value={filterValues.matiere}
              onChange={handleChange}
            >
              <option value="">Toutes les matières</option>
              {matieres.map((matiere) => (
                <option key={matiere} value={matiere}>
                  {matiere}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label for="etudiant">Étudiant</Label>
            <Input
              type="select"
              id="etudiant"
              name="etudiant"
              value={filterValues.etudiant}
              onChange={handleChange}
            >
              <option value="">Tous les étudiants</option>
              {etudiants.map((etudiant) => (
                <option key={etudiant} value={etudiant}>
                  {etudiant}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary" type="submit" className="mt-3">
        Appliquer les Filtres
      </Button>
    </Form>
  );
};

export default Filters;
