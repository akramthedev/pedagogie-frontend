// GestionSallesForm.js
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const GestionSallesForm = ({ onAjouterSalle }) => {
  const [nom, setNom] = useState("");
  const [type, setType] = useState("");
  const [capacite, setCapacite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom || !type || !capacite) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const nouvelleSalle = {
      nom,
      type,
      capacite: parseInt(capacite),
    };

    onAjouterSalle(nouvelleSalle);

    // Réinitialiser le formulaire
    setNom("");
    setType("");
    setCapacite("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Nom de la salle</Label>
        <Input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Ex: Salle A101"
        />
      </FormGroup>

      <FormGroup>
        <Label>Type</Label>
        <Input
          type="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Sélectionner</option>
          <option value="Amphithéâtre">Amphithéâtre</option>
          <option value="Salle classique">Salle classique</option>
          <option value="Laboratoire">Laboratoire</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label>Capacité</Label>
        <Input
          type="number"
          min="1"
          value={capacite}
          onChange={(e) => setCapacite(e.target.value)}
        />
      </FormGroup>

      <Button color="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  );
};

export default GestionSallesForm;
