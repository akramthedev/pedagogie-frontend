import React, { useState } from "react";
import { Table, Modal, ModalBody, ModalHeader } from "reactstrap";
import FicheEtudiant from "../../Etudiant/FicheEtudiant";

const EleveList = ({ eleves }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const calculateAge = (birthDate) => {
    if (!birthDate) return "N/A";
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return `${age} ans`;
  };

  const handleRowClick = (eleve) => {
    setSelectedStudent(eleve);
    setModalOpen(true);
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.title}>📋 Liste des Élèves ({eleves.length})</h5>
      <Table striped bordered responsive>
        <thead style={styles.thead}>
          <tr>
            <th>#</th>
            <th>Élève</th>
            <th>Date & Lieu de Naissance</th>
            <th>Adresse</th>
            <th>Remarque</th>
          </tr>
        </thead>
        <tbody>
          {eleves.length > 0 ? (
            eleves.map((eleve, index) => (
              <tr 
                key={eleve.Etd_Id} 
                style={styles.clickableRow} 
                onClick={() => handleRowClick(eleve)}
              >
                <td>{index + 1}</td>

                {/* Colonne photo + nom complet */}
                <td style={styles.eleveInfo}>
                  {eleve.Etd_Photo ? (
                    <img
                      src={eleve.Etd_Photo}
                      alt={`${eleve.Etd_Nom} ${eleve.Etd_Prenom}`}
                      style={styles.photo}
                    />
                  ) : (
                    <div style={styles.noPhoto}>📷</div>
                  )}
                  <div>
                    <strong>{eleve.Etd_Nom} {eleve.Etd_Prenom}</strong>
                  </div>
                </td>

                {/* Colonne Date & Lieu de Naissance + Âge calculé */}
                <td>
                  {new Date(eleve.Etd_DateNaissance).toLocaleDateString()} ~ 🕰 {calculateAge(eleve.Etd_DateNaissance)}
                  <br />
                  📍 {eleve.Etd_LieuNaissance || "N/A"}
                </td>

                {/* Colonne Adresse */}
                <td>{eleve.Etd_Adresse || "N/A"}</td>

                {/* Colonne Remarque */}
                <td>{eleve.Etd_Remarque || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Aucun élève trouvé
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* MODAL POUR AFFICHER LE DOSSIER PÉDAGOGIQUE */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)} size="lg">
        <ModalHeader toggle={() => setModalOpen(false)}>
          📂 Dossier Pédagogique - {selectedStudent?.Etd_Nom} {selectedStudent?.Etd_Prenom}
        </ModalHeader>
        <ModalBody>
          {selectedStudent && <FicheEtudiant student={selectedStudent} />}
        </ModalBody>
      </Modal>
    </div>
  );
};

// 🎨 Styles
const styles = {
  container: {
    maxHeight: "400px",
    overflowY: "auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#f8f9fa",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  thead: {
    backgroundColor: "#007bff",
    color: "#fff",
    textAlign: "center",
  },
  eleveInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  photo: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  noPhoto: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  clickableRow: {
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

export default EleveList;
