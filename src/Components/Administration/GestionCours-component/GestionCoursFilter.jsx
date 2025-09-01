import React, { useState, useEffect } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

const GestionCoursFilter = ({
  cours,
  filtreNiveau,
  setFiltreNiveau,
  filtreProfesseur,
  setFiltreProfesseur,
  filtreSalle,
  setFiltreSalle,
}) => {
  const [niveaux, setNiveaux] = useState([]);
  const [professeurs, setProfesseurs] = useState([]);
  const [salles, setSalles] = useState([]);

  useEffect(() => {
    if (cours && cours.length > 0) {
      // Extraire les niveaux, professeurs et salles disponibles depuis les cours
      const niveauxSet = new Set(cours.map((c) => c.niveau).filter(Boolean));
      const professeursSet = new Set(cours.map((c) => c.professeur).filter(Boolean));
      const sallesSet = new Set(cours.map((c) => c.salle).filter(Boolean));

      setNiveaux(["Tous", ...Array.from(niveauxSet)]);
      setProfesseurs(["Tous", ...Array.from(professeursSet)]);
      setSalles(["Tous", ...Array.from(sallesSet)]);
    }
  }, [cours]);

  return (
    <Row className="mb-4">
      <Col md={4}>
        <FormGroup>
          <Label for="filtreNiveau">Filtrer par niveau :</Label>
          <Input
            type="select"
            id="filtreNiveau"
            value={filtreNiveau}
            onChange={(e) => setFiltreNiveau(e.target.value)}
          >
            {niveaux.map((niveau, index) => (
              <option key={index} value={niveau}>
                {niveau}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="filtreProfesseur">Filtrer par professeur :</Label>
          <Input
            type="select"
            id="filtreProfesseur"
            value={filtreProfesseur}
            onChange={(e) => setFiltreProfesseur(e.target.value)}
          >
            {professeurs.map((prof, index) => (
              <option key={index} value={prof}>
                {prof}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label for="filtreSalle">Filtrer par salle :</Label>
          <Input
            type="select"
            id="filtreSalle"
            value={filtreSalle}
            onChange={(e) => setFiltreSalle(e.target.value)}
          >
            {salles.map((salle, index) => (
              <option key={index} value={salle}>
                {salle}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default GestionCoursFilter;
