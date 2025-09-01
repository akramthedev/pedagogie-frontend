import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

// 📌 Liste des niveaux disponibles
const niveaux = [
  "MADIALISSE 3 (CM1-CM2)", "DAARA", "MADIALISSE COLLEGE", "PETITE SECTION",
  "GRANDE SECTION", "5e", "MOYENNE SECTION", "MADIALISSE 1 (CI-CP)",
  "MADIALISSE 2 (CE1-CE2)", "6e", "CE2", "3e", "4e", "CM1", "CE1", "CI", "CP", "CM2", "Autre"
];

const MaquetteForm = ({ onAjouterMaquette }) => {
  const [cycle, setCycle] = useState("");
  const [customCycle, setCustomCycle] = useState("");
  const [disciplines, setDisciplines] = useState([]);
  const [nouvelleMatiere, setNouvelleMatiere] = useState("");
  const [duree, setDuree] = useState("");

  const ajouterMatiere = () => {
    if (nouvelleMatiere && duree) {
      setDisciplines([...disciplines, { nom: nouvelleMatiere, duree }]);
      setNouvelleMatiere("");
      setDuree("");
    }
  };

  const supprimerMatiere = (index) => {
    setDisciplines(disciplines.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCycle = cycle === "Autre" ? customCycle : cycle;
    if (finalCycle && disciplines.length > 0) {
      onAjouterMaquette({ id: Date.now(), cycle: finalCycle, disciplines });
      setCycle("");
      setCustomCycle("");
      setDisciplines([]);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="cycle">Cycle / Niveau</Label>
        <Input
          type="select"
          id="cycle"
          value={cycle}
          onChange={(e) => setCycle(e.target.value)}
          required
        >
          <option value="">Sélectionner un niveau</option>
          {niveaux.map((niveau, index) => (
            <option key={index} value={niveau}>
              {niveau}
            </option>
          ))}
        </Input>
        {cycle === "Autre" && (
          <Input
            type="text"
            placeholder="Saisissez un niveau personnalisé"
            value={customCycle}
            onChange={(e) => setCustomCycle(e.target.value)}
            className="mt-2"
            required
          />
        )}
      </FormGroup>

      <FormGroup>
        <Label for="matiere">Ajouter une Matière</Label>
        <div className="d-flex">
          <Input
            type="text"
            id="matiere"
            value={nouvelleMatiere}
            onChange={(e) => setNouvelleMatiere(e.target.value)}
            placeholder="Nom de la matière"
          />
          <Input
            type="text"
            value={duree}
            onChange={(e) => setDuree(e.target.value)}
            placeholder="Durée (ex: 1h30)"
            className="mx-2"
          />
          <Button color="success" onClick={ajouterMatiere}>
            +
          </Button>
        </div>
      </FormGroup>

      {disciplines.length > 0 && (
        <Table striped>
          <thead>
            <tr>
              <th>Matière</th>
              <th>Durée</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {disciplines.map((matiere, index) => (
              <tr key={index}>
                <td>{matiere.nom}</td>
                <td>{matiere.duree}</td>
                <td>
                  <Button color="danger" size="sm" onClick={() => supprimerMatiere(index)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Button type="submit" color="primary" className="mt-3">
        Ajouter la Maquette
      </Button>
    </Form>
  );
};

export default MaquetteForm;
