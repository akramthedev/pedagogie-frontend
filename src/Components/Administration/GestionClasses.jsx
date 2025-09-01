import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../AbstractElements";
import ClasseList from "./GestionClasses-component/ClasseList";
import EleveList from "./GestionClasses-component/EleveList";
import { listeEleves } from './GestionClasses-component/data/listeEleves';
import { listeClasses } from './GestionClasses-component/data/listeClasses';

// Données fictives pour les classes
const fakeClasses = listeClasses;

// Données fictives pour les élèves
const fakeEleves = listeEleves;

const GestionClasses = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [eleves, setEleves] = useState([]);

  // Charger les classes fictives
  useEffect(() => {
    setClasses(fakeClasses);
  }, []);

  // Charger les élèves selon la classe sélectionnée
  const handleSelectClass = (classId) => {
    setSelectedClass(classId);
    setEleves(
      fakeEleves.filter(eleve => 
        eleve.classesEtudiant.some(classe => classe.Cls_Id === classId)
      )
    );
  };
  

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Gestion des classes" parent="Dashboard" title="Admin Eduos" />
      <Container>
        <Row>
          <Col md="4">
            <Card>
              <CardBody>
                {/* <h4>Liste des Classes</h4> */}
                <ClasseList classes={classes} onSelectClass={handleSelectClass} />
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardBody>
                {/* <h4>Liste des Élèves</h4> */}
                {selectedClass ? <EleveList eleves={eleves} /> : <p>Sélectionnez une classe pour voir les élèves</p>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default GestionClasses;
