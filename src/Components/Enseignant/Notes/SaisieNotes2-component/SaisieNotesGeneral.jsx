import React, { Fragment, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Btn, H4, Image } from "../../../../AbstractElements";
import { Media, Modal, ModalBody, ModalFooter, Progress } from "reactstrap";
import femme from "../../../../assets/images/user/woman.png";
import homme from "../../../../assets/images/user/man.png";
import noimage from "../../../../assets/images/user/noimage.png";
import FicheEtudiant from "../../../Etudiant/FicheEtudiant";

const studentTableColumns = (
  handleNoteChange,
  handleAppreciationChange,
  handleOpenPedagogicalFolder,
  barème
) => [
  {
    name: "Élève",
    cell: (row) => (
      <Media
        className="d-flex align-items-center"
        onClick={() => handleOpenPedagogicalFolder(row)}
        style={{ cursor: "pointer" }}
      >
        <Image
          attrImage={{
            className: "rounded-circle img-30 me-3",
            src: row.Etd_Photo
              ? row.Etd_Photo
              : row.sexeEtudiant?.Sex_Nom === "Feminin"
              ? femme
              : row.sexeEtudiant?.Sex_Nom === "Masculin"
              ? homme
              : noimage,
            alt: "Photo de l'élève",
          }}
        />
        <span>
          {row.Etd_Nom} {row.Etd_Prenom}
        </span>
      </Media>
    ),
    sortable: true,
  },
  {
    name: `Note (/ ${barème})`,
    cell: (row) => (
      <div style={{ width: "150px" }}>
        <input
          type="number"
          className="form-control"
          value={row.note || ""}
          onChange={(e) => handleNoteChange(row.Etd_Id, e.target.value, barème)}
          placeholder={`Note sur ${barème}`}
          min="0"
          max={barème}
          style={{
            width: "100%",
            borderColor: row.note < barème / 2 ? "red" : "#ced4da", // Rouge si note faible
          }}
        />
        {/* Barre de progression pour visualiser la note */}
        {row.note && (
          <Progress
            value={(row.note / barème) * 100}
            color={row.note < barème / 2 ? "danger" : "success"}
            className="mt-1"
          />
        )}
      </div>
    ),
  },
  {
    name: "Appréciation",
    cell: (row) => (
      <textarea
        className="form-control"
        rows="1"
        value={row.appreciation || ""}
        onChange={(e) => handleAppreciationChange(row.Etd_Id, e.target.value)}
        placeholder="Ajoutez une appréciation"
        style={{ width: "100%" }}
      />
    ),
  },
];

const SaisieNotesGeneral = ({ Cls_Id, Ens_Id, Mat_Id, Eval_Id }) => {
  const [data, setData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [barème, setBarème] = useState(20); 
  const [evaluation, setEvaluation] = useState(20); 

  // 📌 Données fictives des élèves (remplacer par un appel API si nécessaire)
  useEffect(() => {
    setData([
      { Etd_Id: 1, Etd_Nom: "Dupont", Etd_Prenom: "Alice", sexeEtudiant: { Sex_Nom: "Feminin" } },
      { Etd_Id: 2, Etd_Nom: "Martin", Etd_Prenom: "Paul", sexeEtudiant: { Sex_Nom: "Masculin" } },
      { Etd_Id: 3, Etd_Nom: "Durand", Etd_Prenom: "Emma", sexeEtudiant: { Sex_Nom: "Feminin" } },
    ]);
  }, []);

  // 📌 Définir dynamiquement le barème en fonction de l'évaluation sélectionnée
  useEffect(() => {
    const evaluations = [
      { Eval_Id: "1", Matiere: "Mathématiques", Classe: "6ème A", Bareme: 20 },
      { Eval_Id: "2", Matiere: "Français", Classe: "6ème A", Bareme: 20 },
      { Eval_Id: "3", Matiere: "Histoire", Classe: "5ème B", Bareme: 10 },
    ];

    const selectedEval = evaluations.find((evalItem) => evalItem.Eval_Id === Eval_Id);
    if (selectedEval) {
      setBarème(selectedEval.Bareme);
      setEvaluation(selectedEval.Matiere);
    }
  }, [Eval_Id]);

  const handleNoteChange = (Etd_Id, note, barème) => {
    const numericNote = parseFloat(note);
    if (numericNote >= 0 && numericNote <= barème) {
      setData((prevData) =>
        prevData.map((student) =>
          student.Etd_Id === Etd_Id ? { ...student, note: numericNote } : student
        )
      );
    }
  };

  const handleAppreciationChange = (Etd_Id, appreciation) => {
    setData((prevData) =>
      prevData.map((student) =>
        student.Etd_Id === Etd_Id ? { ...student, appreciation } : student
      )
    );
  };

  const handleOpenPedagogicalFolder = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedStudent(null);
  };

  const handleSubmit = () => {
    alert("Notes enregistrées avec succès !");
  };

  // 📌 Calcul des statistiques globales
  const moyenneClasse =
    data.length > 0
      ? (data.reduce((sum, student) => sum + (student.note || 0), 0) / data.length).toFixed(2)
      : "N/A";

  return (
    <Fragment>
      <H4 attrH4={{ className: "text-muted my-3" }}>Saisie des Notes pour {evaluation}</H4>

      <DataTable
        data={data}
        columns={studentTableColumns(
          handleNoteChange,
          handleAppreciationChange,
          handleOpenPedagogicalFolder,
          barème
        )}
        striped
        pagination
        pointerOnHover
      />

      {/* 📌 Résumé des notes */}
      <div className="mt-4">
        <h5>Moyenne de la classe : <strong>{moyenneClasse} / {barème}</strong></h5>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <Btn attrBtn={{ color: "success", onClick: handleSubmit }}>Enregistrer les Notes</Btn>
      </div>

      {/* Modal pour afficher le dossier pédagogique de l'élève */}
      {selectedStudent && (
        <Modal isOpen={modalOpen} toggle={handleCloseModal} style={{ maxWidth: "1100px" }}>
          <ModalBody>
            <FicheEtudiant student={selectedStudent} />
          </ModalBody>
          <ModalFooter>
            <Btn color="secondary" onClick={handleCloseModal}>Fermer</Btn>
          </ModalFooter>
        </Modal>
      )}
    </Fragment>
  );
};

export default SaisieNotesGeneral;
