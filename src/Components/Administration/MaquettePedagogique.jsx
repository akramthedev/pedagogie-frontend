import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import MaquetteForm from "./MaquettePedagogique-component/MaquetteForm";
import MaquetteTable from "./MaquettePedagogique-component/MaquetteTable";

const MaquettePedagogique = () => {
  const [maquettes, setMaquettes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    // 📌 Charger les maquettes pédagogiques (simulé ici)
    const data = [
      {
        id: 1,
        cycle: "CP",
        disciplines: [
          { nom: "Mathématiques", duree: "200" },
          { nom: "Français", duree: "150" },
        ],
      },
      {
        id: 2,
        cycle: "5e",
        disciplines: [
          { nom: "Physique", duree: "70" },
          { nom: "Histoire", duree: "140" },
        ],
      },
    ];
    setMaquettes(data);
  }, []);

  // const ajouterMaquette = (nouvelleMaquette) => {
  //   setMaquettes([...maquettes, nouvelleMaquette]);
  // };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gestion des Maquettes Pédagogiques</h2>
      <Button color="primary" onClick={toggleModal} className="mb-4">
        Ajouter une Maquette
      </Button>
      <Modal isOpen={modalOpen} toggle={toggleModal} size="xl">
        <ModalHeader toggle={toggleModal}>Créer une Maquette</ModalHeader>
        <ModalBody>
          <MaquetteForm onAjouterMaquette={setMaquettes} />
        </ModalBody>
      </Modal>
      <MaquetteTable maquettesData={maquettes} setMaquettes={setMaquettes} />
    </div>
  );
};

export default MaquettePedagogique;
