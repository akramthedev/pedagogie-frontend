import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import GestionCoursForm from "./GestionCours-component/GestionCoursForm";
import GestionCoursTable from "./GestionCours-component/GestionCoursTable";
import GestionCoursFilter from "./GestionCours-component/GestionCoursFilter";
import DraggableCalendar from "./Calender/DraggableCalender"; // Composant calendrier interactif

const GestionCours = () => {
  // États pour les cours et les filtres
  const [cours, setCours] = useState([]);
  const [filtreNiveau, setFiltreNiveau] = useState("Tous");
  const [filtreProfesseur, setFiltreProfesseur] = useState("Tous");
  const [filtreSalle, setFiltreSalle] = useState("Tous");
  const [modalOpen, setModalOpen] = useState(false);

  // Mode de création : "form" ou "calendar"
  const [modeCreation, setModeCreation] = useState("calendar");

  // État pour stocker la liste des maquettes pédagogiques
  const [maquettes, setMaquettes] = useState([]);

  // Fonction de bascule du modal
  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    // Récupérer les cours depuis `localStorage`
    const savedCourses = localStorage.getItem("calendarEvents");
    if (savedCourses) {
      try {
        setCours(JSON.parse(savedCourses));
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
      }
    }

    // Charger les maquettes pédagogiques
    const savedMaquettes = localStorage.getItem("maquetteData");
    if (savedMaquettes) {
      try {
        setMaquettes(JSON.parse(savedMaquettes));
      } catch (error) {
        console.error("Erreur lors du chargement des maquettes:", error);
      }
    }
  }, []);

  // Fonction pour ajouter de nouveaux cours et sauvegarder dans `localStorage`
  const ajouterCours = (nouveauxCours) => {
    const updatedCours = [...cours, ...nouveauxCours];
    setCours(updatedCours);
    localStorage.setItem("calendarEvents", JSON.stringify(updatedCours));
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
        {/* <Button color="success" onClick={() => localStorage.setItem("calendarEvents", JSON.stringify(cours))}>
          Sauvegarder les modifications
        </Button> */}
      </div>

      <Modal isOpen={modalOpen} toggle={toggleModal} style={{ maxWidth: "1100px" }}>
        <ModalHeader toggle={toggleModal}>Ajouter un Cours</ModalHeader>
        <ModalBody>
          {modeCreation === "form" ? (
            <GestionCoursForm
              onAjouterCours={ajouterCours}
              maquettes={maquettes}
            />
          ) : (
            <DraggableCalendar
              onAjouterCours={ajouterCours}
              maquettes={maquettes}
            />
          )}
        </ModalBody>
      </Modal>

      <GestionCoursFilter
        cours={cours}
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
