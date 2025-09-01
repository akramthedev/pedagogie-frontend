import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import dataExample from "./dataExample";
import ENVIRONMENT from "../../../../environment/index";
import { 
  Btn, 
  // H4, 
  Image 
} from "../../../../AbstractElements";
import {
  Media,
  Modal,
  // ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import femme from "../../../../assets/images/user/woman.png";  
import homme from "../../../../assets/images/user/man.png";  
import noimage from "../../../../assets/images/user/noimage.png";  
import FicheEtudiant from "../../../Etudiant/FicheEtudiant";
import MultipleSelect from "./MultipleSelect";





const getStatusColor = (status) => {
  switch (status) {
    case "Présent":
      return "green";
    case "Absent":
      return "red";
    case "Distanciel":
      return "blue";
    default:
      return "gray";
  }
};







const studentTableColumns = (
  handleStatusChange,
  handleRetardToggle,
  handleRetardChange,
  handleBehaviorChange,
  handleAppreciationChange,
  handleParentConvoque,
  handleDisciplinaryCouncil,
  handleWarning,
  handleOpenPedagogicalFolder,
  handleToggleDropdown
) => [
  {
    name: "Photo + Nom",
    cell: (row) => (
      <Media
        className="d-flex align-items-center"
        onClick={() => handleOpenPedagogicalFolder(row)}
      >
        <Image
          attrImage={{
            className: "rounded-circle img-30 me-3",
            src: row.photo
                ? row.Etd_Photo
                : row.sexeEtudiant?.Sex_Nom === "Feminin"
                ? femme // Image par défaut pour les femmes
                : row.sexeEtudiant?.Sex_Nom === "Masculin"
                ? homme // Image par défaut pour les hommes
                : noimage, // Image générale par défaut
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
    name: "Présence",
    cell: (row) => (
      <select
        className="form-select"
        value={row.statut || "Présent"}
        onChange={(e) => handleStatusChange(row.Etd_Id, e.target.value)}
        style={{
          backgroundColor: getStatusColor(row.statut || "Présent"),
          color: "#fff",
        }}
      >
        <option value="Présent">Présent</option>
        <option value="Absent">Absent</option>
        <option value="Distanciel">Distanciel</option>
      </select>
    ),
  },
  {
    name: "Retard",
    cell: (row) => (
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={row.retard || false}
          onChange={(e) => handleRetardToggle(row.Etd_Id, e.target.checked)}
          className="me-2"
        />
        {row.retard && (
          <input
            type="number"
            className="form-control me-2"
            value={row.retardMinutes || ""}
            onChange={(e) => handleRetardChange(row.Etd_Id, e.target.value)}
            placeholder="Minutes"
            min="1"
            style={{ width: "70px" }}
          />
        )}
      </div>
    ),
  },
  {
    name: "Appréciation",
    cell: (row) => (
      <MultipleSelect row={row} handleBehaviorChange={handleBehaviorChange} />
    ),
  },
  {
    name: "Commentaire",
    cell: (row) => (
      <textarea
        className="form-control"
        rows="2"
        value={row.appreciation || ""}
        onChange={(e) => handleAppreciationChange(row.Etd_Id, e.target.value)}
        placeholder="Ajouter un commentaire"
      />
    ),
  },
  {
    name: "Actions",
    cell: (row) => {
      return (
        <Dropdown
          isOpen={row.dropdownOpen}
          toggle={() => handleToggleDropdown(row.Etd_Id)}
        >
          <DropdownToggle
            tag="button"
            className="btn btn-secondary btn-sm"
            style={{ cursor: "pointer" }}
          >
            Actions
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleParentConvoque(row.Etd_Id)}>
              Convoquer les Parents
            </DropdownItem>
            <DropdownItem onClick={() => handleDisciplinaryCouncil(row.Etd_Id)}>
              Traduire en Conseil de Discipline
            </DropdownItem>
            <DropdownItem onClick={() => handleWarning(row.Etd_Id)}>
              Lancer un Avertissement
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    },
  },
];















const SuiviPresences = ({ Cls_Id, Ens_Id, Mat_Id, Date_Presence }) => {

 
  console.log("Cls_Id " + Cls_Id, "| Ens_Id " + Ens_Id, "| Mat_Id " + Mat_Id, "| Date_Presence " + Date_Presence)
  
  
  const [data, setData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null); // Pour suivre l'élève sélectionné pour le dossier pédagogique
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getStudents = async () => {
      setloading(true);
      try {
        // const resp = await axios.get(
        //   `http://localhost:3002/api/enseignants/etudiants/${Cls_Id}&${Ens_Id}&${Mat_Id}`
        // );
        setData(dataExample);
        setloading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des élèves :", error);
      }
    };
    if (Cls_Id && Ens_Id && Mat_Id) {
      getStudents();
    }
  }, [Cls_Id, Ens_Id, Mat_Id]);

  const handleStatusChange = (Etd_Id, status) => {
    setData((prevData) =>
      prevData.map((student) =>
        student.Etd_Id === Etd_Id ? { ...student, statut: status } : student
      )
    );
  };

  // Fonction pour calculer les minutes de retard
  const calculateRetardMinutes = () => {
    const now = new Date();
    const startHour = 8; // Heure de début du cours (8h00)
    const startMinutes = 0;
    
    // Calcul de la différence en minutes
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const startTimeMinutes = startHour * 60 + startMinutes;
    
    return Math.max(currentMinutes - startTimeMinutes, 0); // Évite les valeurs négatives
  };

  const handleRetardToggle = (Etd_Id, isChecked) => {
    setData((prevData) =>
      prevData.map((student) =>
        student.Etd_Id === Etd_Id
          ? {
              ...student,
              retard: isChecked,
              // retardMinutes: isChecked ? student.retardMinutes : null,
              retardMinutes: isChecked ? calculateRetardMinutes() : null,
            }
          : student
      )
    );
  };

  const handleRetardChange = (Etd_Id, minutes) => {
    setData((prevData) =>
      prevData.map((student) =>
        student.Etd_Id === Etd_Id
          ? { ...student, retardMinutes: minutes }
          : student
      )
    );
  };

  const handleBehaviorChange = (Etd_Id, behavior) => {
    setData((prevData) =>
      prevData.map((student) =>
        student.Etd_Id === Etd_Id
          ? { ...student, comportement: behavior }
          : student
      )
    );
  };

  const handleAppreciationChange = (Etd_Id, appreciation) => {
    setData((prevData) =>
      prevData.map((student) =>
        student.Etd_Id === Etd_Id ? { ...student, appreciation } : student
      )
    );
  };

  const handleParentConvoque = (Etd_Id) => {
    alert(`Parents de l'élève ${Etd_Id} convoqués.`);
  };

  const handleDisciplinaryCouncil = (Etd_Id) => {
    alert(`Traduire l'élève ${Etd_Id} en conseil de discipline`);
  };

  const handleWarning = (Etd_Id) => {
    alert(`Lancer un avertissement pour l'élève ${Etd_Id}`);
  };

  const handleOpenPedagogicalFolder = (student) => {
    setSelectedStudent(student); // On garde l'élève sélectionné
    setModalOpen(true); // Ouvre la modal
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedStudent(null); // Réinitialise l'élève sélectionné
  };

  const handleToggleDropdown = (Etd_Id) => {
    setData((prevData) =>
      prevData.map(
        (student) =>
          student.Etd_Id === Etd_Id
            ? { ...student, dropdownOpen: !student.dropdownOpen }
            : { ...student, dropdownOpen: false } // Ferme les autres menus
      )
    );
  };

  const handleSubmit = async () => {
    const formattedData = data.map((student) => ({
      Etd_Id: student.Etd_Id || null, // Valeur par défaut null si manquant
      EtdClasseAnn_Id:
        student.classesEtudiant?.[0]?.EtudiantClasseAnnee?.EtdClasseAnn_Id ||
        null, // Accès sécurisé et valeur par défaut
      Ens_Id: Ens_Id || null, // Ens_Id passé au niveau de l'appel, valeur par défaut null
      Ecole_Id: student.ecoleEtudiant?.Ecole_Id || null, // Accès sécurisé
      Mat_Id: Mat_Id || null, // Mat_Id passé au niveau de l'appel, valeur par défaut null
      Presence_Status: student.statut || "Présent", // Valeur par défaut : Présent
      Retard: student.retard || false, // Valeur par défaut : false
      Retard_Minutes: student.retard ? student.retardMinutes || 0 : null, // Null si pas de retard
      Comportement: student.comportement || "Sérieux", // Valeur par défaut : Sérieux
      Appreciation: student.appreciation || "", // Valeur par défaut : chaîne vide
      Date_Presence: Date_Presence || new Date().toISOString().split("T")[0], // Date actuelle
      Start_Time: student.startTime || "08:00:00", // Heure par défaut
      End_Time: student.endTime || "10:00:00", // Heure par défaut
      ClsAnnMat_Id: null,
    }));

    try {
      await axios.post(
        "http://localhost:3002/api/enseignants/presences",
        formattedData
      );
      alert("Données enregistrées avec succès !");
    } catch (error) {
      alert("Erreur lors de l'enregistrement des données.");
    }
  };

  return (
    <Fragment>
      {/* <H4 attrH4={{ className: "text-muted my-3" }}>Gestion des Présences</H4> */}
      <DataTable
        data={data}
        columns={studentTableColumns(
          handleStatusChange,
          handleRetardToggle,
          handleRetardChange,
          handleBehaviorChange,
          handleAppreciationChange,
          handleParentConvoque,
          handleWarning,
          handleDisciplinaryCouncil,
          handleOpenPedagogicalFolder,
          handleToggleDropdown
        )}
        striped
        pagination
        progressPending={loading}
        pointerOnHover
      />
      <div className="d-flex justify-content-end mt-3">
        <Btn attrBtn={{ color: "success", onClick: handleSubmit }}>
          Enregistrer les Présences
        </Btn>
      </div>

      {/* Modal pour afficher le dossier pédagogique de l'élève */}
      {selectedStudent && (
        <Modal isOpen={modalOpen} toggle={handleCloseModal} style={{ maxWidth: "1100px" }}>
          {/* <ModalHeader toggle={handleCloseModal}>
            Dossier Pédagogique de {selectedStudent.Etd_Nom}{" "}
            {selectedStudent.Etd_Prenom}
          </ModalHeader> */}
          <ModalBody>
            {/* Appel du composant FicheEtudiant */}
            <FicheEtudiant student={selectedStudent} />
          </ModalBody>
          <ModalFooter>
            <Btn color="secondary" onClick={handleCloseModal}>
              Fermer
            </Btn>
          </ModalFooter>
        </Modal>
      )}
    </Fragment>
  );
};




export default SuiviPresences;
