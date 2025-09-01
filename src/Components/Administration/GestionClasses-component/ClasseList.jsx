import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const ClasseList = ({ classes, onSelectClass }) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (classId) => {
    setSelectedClass(classId);
    onSelectClass(classId);
  };

  return (
    <div style={styles.container}>
      <h5 style={styles.title}>📚 Liste des Classes ({classes.length})</h5>
      <ListGroup style={styles.list}>
        {classes.map((classe) => (
          <ListGroupItem
            key={classe.Cls_Id}
            onClick={() => handleClassClick(classe.Cls_Id)}
            style={{
              ...styles.item,
              backgroundColor: selectedClass === classe.Cls_Id ? "#007bff" : "#fff",
              color: selectedClass === classe.Cls_Id ? "#fff" : "#333",
            }}
          >
            {classe.Cls_Nom}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

const styles = {
  container: {
    maxHeight: "400px", // Hauteur max pour éviter que la liste soit trop longue
    overflowY: "auto", // Activation du scroll vertical si nécessaire
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
  list: {
    padding: 0,
  },
  item: {
    cursor: "pointer",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

export default ClasseList;
