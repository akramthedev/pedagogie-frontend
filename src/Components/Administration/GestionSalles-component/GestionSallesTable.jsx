// GestionSallesTable.js
import React from "react";
import { Table } from "reactstrap";

const GestionSallesTable = ({ salles }) => {
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Type</th>
          <th>Capacité</th>
        </tr>
      </thead>
      <tbody>
        {salles.length === 0 ? (
          <tr>
            <td colSpan="3" className="text-center">Aucune salle trouvée</td>
          </tr>
        ) : (
          salles.map((salle, index) => (
            <tr key={index}>
              <td>{salle.nom}</td>
              <td>{salle.type}</td>
              <td>{salle.capacite}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default GestionSallesTable;
