import React from "react";
import { Table } from "reactstrap";

const TableNotes = ({ notes }) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Classe</th>
          <th>Matière</th>
          <th>Étudiant</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{note.classe}</td>
              <td>{note.matiere}</td>
              <td>{note.etudiant}</td>
              <td>{note.note}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              Aucune note saisie.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableNotes;
