import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Btn, H4 } from "../../AbstractElements";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const GestionEvaluation = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    classe: "",
    niveau: "",
    section: "",
    enseignant: "",
    libelle: "",
    matiere: "",
    coefficient: 1,
    note_sur: 20,
  });

  // États pour stocker les options des listes
  const [classes, setClasses] = useState([]);
  const [niveaux, setNiveaux] = useState([]);
  const [sections, setSections] = useState([]);
  const [enseignants, setEnseignants] = useState([]);
  const [matieres, setMatieres] = useState([]);

  const userRole = localStorage.getItem("eduos_role");

  useEffect(() => {
    if (userRole !== "administrateur") {
      alert("Accès refusé : Cette section est réservée à l'administration.");
      return;
    }
    fetchEvaluations();
  }, []);

  const fetchEvaluations = async () => {
    try {
      // const response = await axios.get("http://localhost:3002/api/evaluations");
      const dataExample = [];
      setEvaluations(dataExample);
    } catch (error) {
      console.error("Erreur lors de la récupération des évaluations :", error);
    }
  };

  // Récupérer les listes pour les `select`
  const fetchLists = async () => {
    try {
      // const [classesResp, niveauxResp, sectionsResp, enseignantsResp, matieresResp] = await Promise.all([
      //   axios.get("http://localhost:3002/api/classes"),
      //   axios.get("http://localhost:3002/api/niveaux"),
      //   axios.get("http://localhost:3002/api/sections"),
      //   axios.get("http://localhost:3002/api/enseignants"),
      //   axios.get("http://localhost:3002/api/matieres"),
      // ]);

      const dataExample = [];

      setClasses(dataExample);
      setNiveaux(dataExample);
      setSections(dataExample);
      setEnseignants(dataExample);
      setMatieres(dataExample);
    } catch (error) {
      console.error("Erreur lors du chargement des listes :", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // await axios.post("http://localhost:3002/api/evaluations", formState);
      console.log(formState);
      alert("Évaluation ajoutée avec succès !");
      setModalOpen(false);
      fetchEvaluations();
    } catch (error) {
      alert("Erreur lors de l'ajout de l'évaluation.");
    }
  };

  const handleEdit = (id) => {
    alert(`Modifier l'évaluation ${id}`);
  };

  const handleValidate = (id) => {
    alert(`Validation de l'évaluation ${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette évaluation ?")) {
      try {
        // await axios.delete(`http://localhost:3002/api/evaluations/${id}`);
      console.log(formState);
        alert("Évaluation supprimée.");
        fetchEvaluations();
      } catch (error) {
        alert("Erreur lors de la suppression.");
      }
    }
  };

  const columns = [
    { name: "Classe", selector: (row) => row.classe, sortable: true },
    { name: "Niveau", selector: (row) => row.niveau, sortable: true },
    { name: "Section", selector: (row) => row.section, sortable: true },
    { name: "Enseignant", selector: (row) => row.enseignant, sortable: true },
    { name: "Matière", selector: (row) => row.matiere, sortable: true },
    { name: "Coefficient", selector: (row) => row.coefficient, sortable: true },
    { name: "Note sur", selector: (row) => row.note_sur, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex">
          <Btn attrBtn={{ color: "warning", className: "me-2", onClick: () => handleEdit(row.id) }}>
            Modifier
          </Btn>
          <Btn attrBtn={{ color: "success", className: "me-2", onClick: () => handleValidate(row.id) }}>
            Valider
          </Btn>
          <Btn attrBtn={{ color: "danger", onClick: () => handleDelete(row.id) }}>
            Supprimer
          </Btn>
        </div>
      ),
    },
  ];

  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <H4 attrH4={{ className: "text-muted" }}>Gestion des Évaluations</H4>
                  <Btn attrBtn={{ color: "primary", onClick: () => setModalOpen(true) }}>
                    Nouvelle Évaluation
                  </Btn>
                </div>
                <DataTable data={evaluations} columns={columns} striped pagination />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modale pour créer une nouvelle évaluation */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Nouvelle Évaluation</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Niveau</Label>
                  <Input type="select" name="niveau" value={formState.niveau} onChange={handleInputChange}>
                    <option value="">Sélectionner</option>
                    {niveaux.map((n) => (
                      <option key={n.id} value={n.nom}>{n.nom}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Classe</Label>
                  <Input type="select" name="classe" value={formState.classe} onChange={handleInputChange}>
                    <option value="">Sélectionner</option>
                    {classes.map((c) => (
                      <option key={c.id} value={c.nom}>{c.nom}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Section</Label>
                  <Input type="select" name="section" value={formState.section} onChange={handleInputChange}>
                    <option value="">Sélectionner</option>
                    {sections.map((s) => (
                      <option key={s.id} value={s.nom}>{s.nom}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Enseignant</Label>
                  <Input type="select" name="enseignant" value={formState.enseignant} onChange={handleInputChange}>
                    <option value="">Sélectionner</option>
                    {enseignants.map((e) => (
                      <option key={e.id} value={e.nom}>{e.nom}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Libellé</Label>
                  <Input type="text" name="libelle" value={formState.libelle} onChange={handleInputChange} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Matière</Label>
                  <Input type="select" name="matiere" value={formState.matiere} onChange={handleInputChange}>
                    <option value="">Sélectionner</option>
                    {matieres.map((m) => (
                      <option key={m.id} value={m.nom}>{m.nom}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="6">
                <FormGroup>
                  <Label>Coefficient</Label>
                  <Input type="number" name="coefficient" value={formState.coefficient} onChange={handleInputChange} min="1" />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Note sur</Label>
                  <Input type="number" name="note_sur" value={formState.note_sur} onChange={handleInputChange} min="1" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Btn attrBtn={{ color: "secondary", onClick: () => setModalOpen(false) }}>
            Annuler
          </Btn>
          <Btn attrBtn={{ color: "success", onClick: handleSubmit }}>
            Ajouter
          </Btn>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default GestionEvaluation;
