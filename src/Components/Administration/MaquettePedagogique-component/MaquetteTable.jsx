import React, { useState, useEffect } from "react";
import { Table, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import MaquetteFormEdit from "./MaquetteFormEdit";

const MaquetteTable = ({ maquettesData }) => {
  const [maquettes, setMaquettes] = useState(maquettesData || []);
  const [selectedMaquette, setSelectedMaquette] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // 🔹 Charger les maquettes depuis localStorage au montage
  useEffect(() => {
    const savedData = localStorage.getItem("maquetteData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          setMaquettes(parsedData);
        } else {
          console.error("Données corrompues dans localStorage");
          setMaquettes([]);
        }
      } catch (error) {
        console.error("Erreur de lecture du localStorage:", error);
        setMaquettes([]);
      }
    }
  }, []);

  // 🔹 Sauvegarde automatique dans localStorage après modification
  useEffect(() => {
    if (maquettes.length > 0) {
      localStorage.setItem("maquetteData", JSON.stringify(maquettes));
    }
  }, [maquettes]);

  const toggleModal = () => setModalOpen(!modalOpen);

  const supprimerMaquette = (id) => {
    const updatedMaquettes = maquettes.filter((maquette) => maquette.id !== id);
    setMaquettes(updatedMaquettes);
    localStorage.setItem("maquetteData", JSON.stringify(updatedMaquettes));
  };

  const modifierMaquette = (maquette) => {
    setSelectedMaquette(maquette);
    toggleModal();
  };

  const sauvegarderModification = (maquetteModifiee) => {
    const updatedMaquettes = maquettes.map((m) =>
      m.id === maquetteModifiee.id ? maquetteModifiee : m
    );
    setMaquettes(updatedMaquettes);
    localStorage.setItem("maquetteData", JSON.stringify(updatedMaquettes));
    toggleModal();
  };

  return (
    <div>
      {maquettes.length > 0 ? (
        <Table striped>
          <thead>
            <tr>
              <th>Cycle / Niveau</th>
              <th>Segmentation</th>
              <th>Matières</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {maquettes.map((maquette) => (
              <tr key={maquette.id}>
                <td>{maquette.niveau}</td>
                <td>{maquette.segmentation} ({maquette.nombreSegments})</td>
                <td>
                  {maquette.segments?.flatMap((segment) =>
                    segment.disciplines?.map((discipline) => (
                      <div key={discipline.nom}>
                        <strong>{discipline.nom}</strong> ({discipline.duree}h)
                        <ul>
                          {discipline.activites?.map((act, idx) => (
                            <li key={idx}>{act.type} - {act.totalHeures}h</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </td>
                <td>
                  <Button color="warning" size="sm" onClick={() => modifierMaquette(maquette)}>
                    Modifier
                  </Button>{" "}
                  <Button color="danger" size="sm" onClick={() => supprimerMaquette(maquette.id)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Aucune maquette disponible.</p>
      )}

      {/* Modal pour modification */}
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modifier la Maquette</ModalHeader>
        <ModalBody>
          {selectedMaquette && (
            <MaquetteFormEdit maquette={selectedMaquette} onSauvegarder={sauvegarderModification} />
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MaquetteTable;
