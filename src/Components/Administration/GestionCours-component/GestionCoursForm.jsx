import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Table,
  Card,
} from "reactstrap";

const GestionCoursForm = ({
  onAjouterCours,
  niveaux,
  matieres,
  enseignants,
  salles,
}) => {
  const [cours, setCours] = useState({
    niveau: "",
    matiere: "",
    professeur: "",
    salle: "",
    mode: "unique",
    date: "",
    dateDebut: "",
    dateFin: "",
    joursSelectionnes: {},
    heureDebut: "",
    heureFin: "",
  });

  const [matieresFiltrees, setMatieresFiltrees] = useState([]);
  const [enseignantsFiltres, setEnseignantsFiltres] = useState([]);

  useEffect(() => {
    if (cours.niveau) {
      setMatieresFiltrees(matieres.filter((m) => m.niveau === cours.niveau));
      setCours((prev) => ({ ...prev, matiere: "", professeur: "" }));
    }
  }, [cours.niveau, matieres]);

  useEffect(() => {
    if (cours.matiere) {
      setEnseignantsFiltres(
        enseignants.filter((p) => p.matiere === cours.matiere)
      );
      setCours((prev) => ({ ...prev, professeur: "" }));
    }
  }, [cours.matiere, enseignants]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCours({ ...cours, [name]: value });
  };

  const handleJourSelectionne = (e) => {
    const { value, checked } = e.target;
    setCours((prev) => ({
      ...prev,
      joursSelectionnes: {
        ...prev.joursSelectionnes,
        [value]: checked ? { heureDebut: "", heureFin: "" } : undefined,
      },
    }));
  };

  const handleHoraireChange = (jour, field, value) => {
    setCours((prev) => ({
      ...prev,
      joursSelectionnes: {
        ...prev.joursSelectionnes,
        [jour]: { ...prev.joursSelectionnes[jour], [field]: value },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauxCours = [];
    const titreCours = `${cours.matiere} - ${cours.niveau}`;

    if (cours.mode === "unique") {
      nouveauxCours.push({
        id: Date.now(),
        titre: titreCours,
        date: cours.date,
        heureDebut: cours.heureDebut,
        heureFin: cours.heureFin,
        niveau: cours.niveau,
        professeur: cours.professeur,
        salle: cours.salle,
      });
    } else {
      let currentDate = new Date(cours.dateDebut);
      let endDate = new Date(cours.dateFin);

      while (currentDate <= endDate) {
        const dayIndex = currentDate.getDay().toString();
        if (cours.joursSelectionnes[dayIndex]) {
          nouveauxCours.push({
            id: Date.now() + currentDate.getTime(),
            titre: titreCours,
            date: currentDate.toISOString().split("T")[0],
            heureDebut: cours.joursSelectionnes[dayIndex]?.heureDebut,
            heureFin: cours.joursSelectionnes[dayIndex]?.heureFin,
            niveau: cours.niveau,
            professeur: cours.professeur,
            salle: cours.salle,
          });
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }

    onAjouterCours(nouveauxCours);
    setCours({
      niveau: "",
      matiere: "",
      professeur: "",
      salle: "",
      mode: "unique",
      date: "",
      dateDebut: "",
      dateFin: "",
      joursSelectionnes: {},
      heureDebut: "",
      heureFin: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label>Niveau ({niveaux?.length})</Label>
            <Input type="select" name="niveau" value={cours.niveau} onChange={handleChange} required>
              <option value="">Sélectionner</option>
              {niveaux?.map((niveau) => <option key={niveau} value={niveau}>{niveau}</option>)}
            </Input>
          </FormGroup>
        </Col>

        <Col md={3}>
          <FormGroup>
            <Label>Matière ({matieresFiltrees?.length})</Label>
            <Input type="select" name="matiere" value={cours.matiere} onChange={handleChange} required>
              <option value="">Sélectionner</option>
              {matieresFiltrees?.map((matiere) => <option key={matiere.id} value={matiere.nom}>{matiere.nom}</option>)}
            </Input>
          </FormGroup>
        </Col>

        <Col md={3}>
          <FormGroup>
            <Label>Professeur ({enseignantsFiltres?.length})</Label>
            <Input type="select" name="professeur" value={cours.professeur} onChange={handleChange} required>
              <option value="">Sélectionner</option>
              {enseignantsFiltres?.map((prof) => <option key={prof.id} value={prof.nom}>{prof.nom}</option>)}
            </Input>
          </FormGroup>
        </Col>

        <Col md={3}>
          <FormGroup>
            <Label>Salles ({salles?.length})</Label>
            <Input type="select" name="salle" value={cours.salle} onChange={handleChange} required>
              <option value="">Sélectionner</option>
              {salles?.map((salle) => <option key={salle} value={salle}>{salle}</option>)}
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Card className="p-3 bg-light">
        {/* <Label className="font-weight-bold">Mode de planification</Label> */}
        <Input type="select" name="mode" value={cours.mode} onChange={handleChange}>
          <option value="unique">Unique</option>
          <option value="plage">Plage de dates</option>
        </Input>
      </Card>

      {cours.mode === "unique" ? (
        <Row className="mt-3">
          <Col md={4}>
            <Label>Date</Label>
            <Input type="date" name="date" value={cours.date} onChange={handleChange} required />
          </Col>
          <Col md={4}>
            <Label>Heure début</Label>
            <Input type="time" name="heureDebut" value={cours.heureDebut} onChange={handleChange} required />
          </Col>
          <Col md={4}>
            <Label>Heure fin</Label>
            <Input type="time" name="heureFin" value={cours.heureFin} onChange={handleChange} required />
          </Col>
        </Row>
      ) : (
        <>
          <Row className="mt-3">
            <Col md={6}><Input type="date" name="dateDebut" value={cours.dateDebut} onChange={handleChange} required /></Col>
            <Col md={6}><Input type="date" name="dateFin" value={cours.dateFin} onChange={handleChange} required /></Col>
          </Row>

          <Table className="mt-3">
            <thead>
              <tr>
              <th>Activer</th>
                <th>Jour</th>
                <th>Heure Début</th>
                <th>Heure Fin</th>
              </tr>
            </thead>
            <tbody>
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((jour, index) => (
                <tr key={index}>
                  <td><Input type="checkbox" value={index.toString()} onChange={handleJourSelectionne}  style={{backgroundColor: "#7366ff"}} /></td>
                  <td>{jour}</td>
                  <td><Input type="time" onChange={(e) => handleHoraireChange(index.toString(), "heureDebut", e.target.value)} disabled={!cours.joursSelectionnes[index]} /></td>
                  <td><Input type="time" onChange={(e) => handleHoraireChange(index.toString(), "heureFin", e.target.value)} disabled={!cours.joursSelectionnes[index]} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}

      <Button type="submit" color="primary" block>Ajouter Cours</Button>
    </Form>
  );
};

export default GestionCoursForm;
