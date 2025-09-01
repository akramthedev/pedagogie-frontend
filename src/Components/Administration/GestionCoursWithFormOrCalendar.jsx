import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import GestionCoursForm from "./GestionCours-component/GestionCoursForm";
import GestionCoursTable from "./GestionCours-component/GestionCoursTable";
import GestionCoursFilter from "./GestionCours-component/GestionCoursFilter";
// import DraggableCalendar from "./DraggableCalender"; // Composant calendrier interactif
import DraggableCalendar from "./Calender/DraggableCalender"; // Composant calendrier interactif

const GestionCours = () => {
  // États pour les cours et les filtres
  const [cours, setCours] = useState([]);
  const [filtreNiveau, setFiltreNiveau] = useState("Tous");
  const [filtreProfesseur, setFiltreProfesseur] = useState("Tous");
  const [filtreSalle, setFiltreSalle] = useState("Tous");
  const [modalOpen, setModalOpen] = useState(false);
  
  // Mode de création : "form" ou "calendar"
  const [modeCreation, setModeCreation] = useState("form");
  
  // État pour stocker la liste des maquettes pédagogiques
  const [maquettes, setMaquettes] = useState([]);
  
  // Fonction de bascule du modal
  const toggleModal = () => setModalOpen(!modalOpen);
  
  // Données de test
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
    // Données initiales pour les cours
    const dataCours = [
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
    setCours(dataCours);
    
    // Données de test pour les maquettes pédagogiques
    const dataMaquettes = [
      {
        id: 1,
        cycle: "CP",
        matieres: [
          { nom: "Mathématiques", duree: "1h" },
          { nom: "Français", duree: "1h30" },
        ],
      },
      {
        id: 2,
        cycle: "5e",
        matieres: [
          { nom: "Physique", duree: "2h" },
          { nom: "Histoire", duree: "1h" },
        ],
      },
    ];
    setMaquettes(dataMaquettes);
  }, []);
  
  // Fonction pour ajouter de nouveaux cours
  const ajouterCours = (nouveauxCours) => {
    setCours([...cours, ...nouveauxCours]);
  };
  
  // Filtrage des cours selon les filtres définis
  const coursFiltres = cours.filter(
    (c) =>
      (filtreNiveau === "Tous" || c.niveau === filtreNiveau) &&
      (filtreProfesseur === "Tous" || c.professeur === filtreProfesseur) &&
      (filtreSalle === "Tous" || c.salle === filtreSalle)
  );
  
  // Permet de changer le mode de création : formulaire ou calendrier
  const handleModeChange = (mode) => {
    setModeCreation(mode);
  };
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gestion des Cours</h2>
      <div className="mb-4">
        <Button color="primary" onClick={toggleModal} className="mr-2">
          Ajouter un Cours
        </Button>
        <Button
          color={modeCreation === "form" ? "success" : "secondary"}
          onClick={() => handleModeChange("form")}
          className="mr-2"
        >
          Formulaire
        </Button>
        <Button
          color={modeCreation === "calendar" ? "success" : "secondary"}
          onClick={() => handleModeChange("calendar")}
        >
          Calendrier
        </Button>
      </div>
      
      <Modal isOpen={modalOpen} toggle={toggleModal} style={{ maxWidth: "1100px" }}>
        <ModalHeader toggle={toggleModal}>Ajouter un Cours</ModalHeader>
        <ModalBody>
          {modeCreation === "form" ? (
            <GestionCoursForm
              onAjouterCours={ajouterCours}
              niveaux={niveaux}
              matieres={matieres}
              enseignants={enseignants}
              salles={salles}
              maquettes={maquettes} // Passage de la liste des maquettes
            />
          ) : (
            <DraggableCalendar
              onAjouterCours={ajouterCours}
              niveaux={niveaux}
              matieres={matieres}
              enseignants={enseignants}
              salles={salles}
              maquettes={maquettes} // Passage de la liste des maquettes
            />
          )}
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
