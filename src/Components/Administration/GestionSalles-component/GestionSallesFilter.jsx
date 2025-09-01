// GestionSallesFilter.js
import React from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

const GestionSallesFilter = ({
  filtreType,
  setFiltreType,
  filtreCapacite,
  setFiltreCapacite,
}) => {
  return (
    <Row className="mb-4">
      <Col md={6}>
        <FormGroup>
          <Label>Filtrer par type</Label>
          <Input
            type="select"
            value={filtreType}
            onChange={(e) => setFiltreType(e.target.value)}
          >
            <option value="Tous">Tous</option>
            <option value="Amphithéâtre">Amphithéâtre</option>
            <option value="Salle classique">Salle classique</option>
            <option value="Laboratoire">Laboratoire</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label>Filtrer par capacité minimale</Label>
          <Input
            type="number"
            min="0"
            value={filtreCapacite === "Tous" ? "" : filtreCapacite}
            onChange={(e) =>
              setFiltreCapacite(e.target.value === "" ? "Tous" : parseInt(e.target.value))
            }
            placeholder="Ex: 50"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default GestionSallesFilter;