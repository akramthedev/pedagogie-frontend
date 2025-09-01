import React, { useState, Fragment } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { FormNotes, TableNotes } from "./SaisieNotes-component";

const SaisieNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (noteData) => {
    setNotes((prevNotes) => [...prevNotes, noteData]);
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Saisie des Notes"
        parent="Enseignant"
        title="Saisie des Notes"
      />
      <Container className="mt-4">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                {/* <h3 className="text-center">Saisie des Notes</h3> */}
                <FormNotes onAddNote={handleAddNote} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="text-center">Notes Saisies</h4>
                <TableNotes notes={notes} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SaisieNotes;
