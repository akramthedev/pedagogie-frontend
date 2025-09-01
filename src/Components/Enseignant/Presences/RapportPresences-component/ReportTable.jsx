import React from "react";
import { Table, Button } from "reactstrap";

const ReportTable = ({ data }) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>Matricule</th>
          <th>Nom</th>
          <th>Date</th>
          <th>Classe</th>
          <th>Enseignant</th>
          <th>État</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.matricule}</td>
            <td>{item.nom}</td>
            <td>{item.date}</td>
            <td>{item.classe}</td>
            <td>{item.enseignant}</td>
            <td>{item.etat}</td>
            <td>
              <Button color="info" size="sm">
                Détails
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReportTable;
