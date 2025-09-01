import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

const MaquetteFormEdit = ({ maquette, onSauvegarder }) => {
  const [cycle, setCycle] = useState(maquette.cycle);
  const [matieres, setMatieres] = useState(maquette.matieres);
  const [nouvelleMatiere, setNouvelleMatiere] = useState("");
  const [duree, setDuree] = useState("");

  const ajouterMatiere = () => {
    if (nouvelleMatiere && duree) {
      setMatieres([...matieres, { nom: nouvelleMatiere, duree }]);
      setNouvelleMatiere("");
      setDuree("");
    }
  };

  const supprimerMatiere = (index) => {
    setMatieres(matieres.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSauvegarder({ ...maquette, cycle, matieres });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="cycle">Cycle / Niveau</Label>
        <Input
          type="text"
          id="cycle"
          value={cycle}
          onChange={(e) => setCycle(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Ajouter une Matière</Label>
        <div className="d-flex">
          <Input
            type="text"
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

      {matieres.length > 0 && (
        <Table striped>
          <thead>
            <tr>
              <th>Matière</th>
              <th>Durée</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {matieres.map((matiere, index) => (
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
        Sauvegarder les Modifications
      </Button>
    </Form>
  );
};

export default MaquetteFormEdit;
