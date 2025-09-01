import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import GestionSallesForm from "./GestionSalles-component/GestionSallesForm";
import GestionSallesTable from "./GestionSalles-component/GestionSallesTable";
import GestionSallesFilter from "./GestionSalles-component/GestionSallesFilter";

const GestionSalles = () => {
  const [salles, setSalles] = useState([]);
  const [filtreType, setFiltreType] = useState("Tous");
  const [filtreCapacite, setFiltreCapacite] = useState("Tous");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    fetchSalles();
  }, []);

  const fetchSalles = async () => {
    try {
      // const response = await axios.get("http://localhost:3002/api/salles");
      const dataExample = [];
      setSalles(dataExample);
    } catch (error) {
      console.error("Erreur lors de la récupération des salles :", error);
    }
  };

  const ajouterSalle = async (nouvelleSalle) => {
    try {
      // await axios.post("http://localhost:3002/api/salles", nouvelleSalle);
      console.log(nouvelleSalle);
      fetchSalles();
    } catch (error) {
      console.error("Erreur lors de l'ajout de la salle :", error);
    }
  };

  const sallesFiltrees = salles.filter(
    (s) =>
      (filtreType === "Tous" || s.type === filtreType) &&
      (filtreCapacite === "Tous" || s.capacite >= filtreCapacite)
  );

  return (
    <Fragment>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Gestion des Salles</h2>
        <Button color="primary" onClick={toggleModal} className="mb-4">
          Ajouter une Salle
        </Button>
        <Modal isOpen={modalOpen} toggle={toggleModal} style={{ maxWidth: "800px" }}>
          <ModalHeader toggle={toggleModal}>Ajouter une Salle</ModalHeader>
          <ModalBody>
            <GestionSallesForm onAjouterSalle={ajouterSalle} />
          </ModalBody>
        </Modal>
        <GestionSallesFilter
          filtreType={filtreType}
          setFiltreType={setFiltreType}
          filtreCapacite={filtreCapacite}
          setFiltreCapacite={setFiltreCapacite}
        />
        <GestionSallesTable salles={sallesFiltrees} />
      </div>
    </Fragment>
  );
};

export default GestionSalles;
