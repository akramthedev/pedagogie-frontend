import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import GestionCoursForm from "./GestionCours-component/GestionCoursForm";
import GestionCoursTable from "./GestionCours-component/GestionCoursTable";
import GestionCoursFilter from "./GestionCours-component/GestionCoursFilter";

const GestionCours = () => {
  const [cours, setCours] = useState([]);
  const [filtreNiveau, setFiltreNiveau] = useState("Tous");
  const [filtreProfesseur, setFiltreProfesseur] = useState("Tous");
  const [filtreSalle, setFiltreSalle] = useState("Tous");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  // 📌 Données de test
  const niveaux = ["Primaire", "Collège", "Lycée"];
  
  const matieres = [
    { id: 1, nom: "Mathématiques", niveau: "Lycée" },
    { id: 2, nom: "Français", niveau: "Collège" },
    { id: 3, nom: "Physique", niveau: "Lycée" },
    { id: 4, nom: "Sciences", niveau: "Primaire" },
    { id: 5, nom: "Histoire", niveau: "Primaire" },
  ];
  
  const enseignants = [
    { id: 1, nom: "M. Dupont", matiere: "Mathématiques" },
    { id: 2, nom: "Mme Leroy", matiere: "Français" },
    { id: 3, nom: "M. Martin", matiere: "Physique" },
    { id: 4, nom: "Mme Rousseau", matiere: "Sciences" },
    { id: 5, nom: "M. Durand", matiere: "Histoire" },
  ];
  
  const salles = ["Salle 101", "Salle 202", "Salle 303", "Salle 404", "Salle 505"];

  useEffect(() => {
    const data = [
      {
        id: 1,
        titre: "Mathématiques - Algèbre",
        date: "2025-02-13",
        heureDebut: "09:00",
        heureFin: "10:30",
        niveau: "Lycée",
        professeur: "M. Dupont",
        salle: "Salle 101",
      },
      {
        id: 2,
        titre: "Français - Grammaire",
        date: "2025-02-14",
        heureDebut: "11:00",
        heureFin: "12:30",
        niveau: "Collège",
        professeur: "Mme Leroy",
        salle: "Salle 202",
      },
      {
        id: 3,
        titre: "Physique - Mécanique",
        date: "2025-02-15",
        heureDebut: "14:00",
        heureFin: "15:30",
        niveau: "Lycée",
        professeur: "M. Martin",
        salle: "Salle 303",
      },
      {
        id: 4,
        titre: "Sciences - Introduction",
        date: "2025-02-16",
        heureDebut: "08:00",
        heureFin: "09:30",
        niveau: "Primaire",
        professeur: "Mme Rousseau",
        salle: "Salle 404",
      },
      {
        id: 5,
        titre: "Histoire - Révolution Française",
        date: "2025-02-17",
        heureDebut: "10:00",
        heureFin: "11:30",
        niveau: "Primaire",
        professeur: "M. Durand",
        salle: "Salle 505",
      },
    ];
    setCours(data);
  }, []);

  const ajouterCours = (nouveauxCours) => {
    setCours([...cours, ...nouveauxCours]);
  };

  const coursFiltres = cours.filter(
    (c) =>
      (filtreNiveau === "Tous" || c.niveau === filtreNiveau) &&
      (filtreProfesseur === "Tous" || c.professeur === filtreProfesseur) &&
      (filtreSalle === "Tous" || c.salle === filtreSalle)
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gestion des Cours</h2>
      <Button color="primary" onClick={toggleModal} className="mb-4">
        Ajouter un Cours
      </Button>
      <Modal isOpen={modalOpen} toggle={toggleModal} style={{ maxWidth: "1100px" }}>
        <ModalHeader toggle={toggleModal}>Ajouter un Cours</ModalHeader>
        <ModalBody>
          <GestionCoursForm
            onAjouterCours={ajouterCours}
            niveaux={niveaux}
            matieres={matieres}
            enseignants={enseignants}
            salles={salles}
          />
        </ModalBody>
      </Modal>
      <GestionCoursFilter
        filtreNiveau={filtreNiveau}
        setFiltreNiveau={setFiltreNiveau}
        filtreProfesseur={filtreProfesseur}
        setFiltreProfesseur={setFiltreProfesseur}
        filtreSalle={filtreSalle}
        setFiltreSalle={setFiltreSalle}
      />
      <GestionCoursTable cours={coursFiltres} />
    </div>
  );
};

export default GestionCours;
