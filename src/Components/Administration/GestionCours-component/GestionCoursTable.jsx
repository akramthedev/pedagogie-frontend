import React, { useState, useEffect } from "react";
import { Table, Button, Input } from "reactstrap";
import moment from "moment";

const GestionCoursTable = () => {
  const [cours, setCours] = useState([]);
  const [selectedCours, setSelectedCours] = useState(new Set());
  const [selectedProfesseur, setSelectedProfesseur] = useState("");
  const [selectedSalle, setSelectedSalle] = useState("");

  useEffect(() => {
    const savedCourses = localStorage.getItem("calendarEvents");
    if (savedCourses) {
      try {
        const parsedCourses = JSON.parse(savedCourses);

        const formattedCourses = parsedCourses.map((cours) => ({
          id: cours.id,
          titre: cours.title,
          date: moment(cours.start).format("DD/MM/YYYY"),
          heureDebut: moment(cours.start).format("HH:mm"),
          heureFin: moment(cours.end).format("HH:mm"),
          niveau: cours.niveau || "Non spécifié",
          professeur: cours.professeur || "",
          salle: cours.salle || "",
        }));

        setCours(formattedCourses);
      } catch (error) {
        console.error("Erreur lors de la lecture des cours:", error);
      }
    }
  }, []);

  // Gérer la sélection d'un cours
  const handleSelectCours = (id) => {
    setSelectedCours((prev) => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  // Appliquer les modifications aux cours sélectionnés
  const applyChanges = () => {
    if (selectedCours.size === 0) {
      alert("Veuillez sélectionner au moins un cours !");
      return;
    }

    const updatedCours = cours.map((c) => {
      if (selectedCours.has(c.id)) {
        return {
          ...c,
          professeur: selectedProfesseur || c.professeur,
          salle: selectedSalle || c.salle,
        };
      }
      return c;
    });

    setCours(updatedCours);
    localStorage.setItem("calendarEvents", JSON.stringify(updatedCours));

    alert("Modifications appliquées !");
    setSelectedCours(new Set()); // Réinitialisation des sélections
  };

  return (
    <div>
      <div className="d-flex mb-3">
        <Input
          type="select"
          value={selectedProfesseur}
          onChange={(e) => setSelectedProfesseur(e.target.value)}
          className="me-2"
        >
          <option value="">-- Sélectionner un Professeur --</option>
          <option value="Prof. Dupont">Prof. Dupont</option>
          <option value="Prof. Martin">Prof. Martin</option>
          <option value="Prof. Durand">Prof. Durand</option>
        </Input>

        <Input
          type="select"
          value={selectedSalle}
          onChange={(e) => setSelectedSalle(e.target.value)}
          className="me-2"
        >
          <option value="">-- Sélectionner une Salle --</option>
          <option value="Salle 101">Salle 101</option>
          <option value="Salle 202">Salle 202</option>
          <option value="Salle 303">Salle 303</option>
        </Input>

        <Button color="primary" onClick={applyChanges}>Appliquer les changements</Button>
      </div>

      <Table bordered responsive>
        <thead>
          <tr>
            <th></th> {/* Checkbox pour sélection multiple */}
            <th>Cours</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Niveau</th>
            <th>Professeur</th>
            <th>Salle</th>
          </tr>
        </thead>
        <tbody>
          {cours.length > 0 ? (
            cours.map((cours) => (
              <tr key={cours.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedCours.has(cours.id)}
                    onChange={() => handleSelectCours(cours.id)}
                  />
                </td>
                <td>{cours.titre}</td>
                <td>{cours.date}</td>
                <td>{cours.heureDebut} - {cours.heureFin}</td>
                <td>{cours.niveau}</td>
                <td>{cours.professeur || "Non assigné"}</td>
                <td>{cours.salle || "Non assignée"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">Aucun cours trouvé</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default GestionCoursTable;
