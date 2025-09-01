import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import HeaderCard from "../../Common/Component/HeaderCard";
// import FormFilter from "./RapportPresence-component/FormFilter";
// import ReportTable from "./RapportPresence-component/ReportTable";
import {
    FormFilter,
    ReportTable,
  } from './RapportPresences-component';

const RapportPresences = () => {
  const [filters, setFilters] = useState({
    classes: [],
    dateDebut: "",
    dateFin: "",
    justificatif: "",
    etats: [],
  });

  const [reportData, setReportData] = useState([]);

  const handleFilterSubmit = (filterValues) => {
    setFilters(filterValues);

    // Simuler une requête API avec les filtres
    // Vous remplacerez ceci par un appel réel à votre backend
    const fakeData = [
      {
        matricule: "12345",
        nom: "John Doe",
        date: "2023-01-10",
        classe: "Mathématiques",
        enseignant: "M. Smith",
        etat: "Présentiel",
      },
      {
        matricule: "67890",
        nom: "Jane Smith",
        date: "2023-01-10",
        classe: "Physique",
        enseignant: "Mme Doe",
        etat: "Absent",
      },
    ];

    setReportData(fakeData);
  };

  return (
    <Container fluid={true}>
      <Breadcrumbs
        mainTitle="Rapport de Présences"
        parent="Rapports"
        title="Rapport de Présences"
      />
      <Row>
        <Col sm="12">
          <Card>
            {/* <HeaderCard title="Filtrez les données pour générer le rapport" /> */}
            <CardBody>
              <FormFilter onSubmit={handleFilterSubmit} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Card>
            <HeaderCard title="Résultats du Rapport" />
            <CardBody>
              <ReportTable data={reportData} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RapportPresences;
