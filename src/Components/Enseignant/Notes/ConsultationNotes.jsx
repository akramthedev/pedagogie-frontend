import React, { useState, Fragment } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { Filters, TableNotes } from "./ConsultationNotes-component";

const ConsultationNotes = () => {
  const [filters, setFilters] = useState({
    classe: "",
    matiere: "",
    etudiant: "",
  });
  const [notes, setNotes] = useState([
    // Exemple de données initiales
    {
      classe: "Classe 1",
      matiere: "Mathématiques",
      etudiant: "John Doe",
      note: 18,
    },
    {
      classe: "Classe 2",
      matiere: "Physique",
      etudiant: "Jane Smith",
      note: 15,
    },
  ]);

  const handleFilterChange = (filterValues) => {
    setFilters(filterValues);
  };

  const filteredNotes = notes.filter((note) => {
    return (
      (!filters.classe || note.classe === filters.classe) &&
      (!filters.matiere || note.matiere === filters.matiere) &&
      (!filters.etudiant || note.etudiant === filters.etudiant)
    );
  });

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Suivi des Notes"
        parent="Enseignant"
        title="Suivi des Notes"
      />
      <Container className="mt-4">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                {/* <h3 className="text-center">Consultation des Notes</h3> */}
                <Filters onFilterChange={handleFilterChange} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="text-center">Résultats des Notes</h4>
                <TableNotes notes={filteredNotes} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ConsultationNotes;
