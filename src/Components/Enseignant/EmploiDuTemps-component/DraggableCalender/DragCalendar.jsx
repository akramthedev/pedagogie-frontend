import React, { Fragment, useState, useEffect } from "react";
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";
import moment from "moment";

const ProfesseurCalendar = () => {
  const [calendarEvents, setCalendarEvents] = useState([
    { title: "Mathématiques", start: new Date("2025-02-01T08:00"), end: new Date("2025-02-01T10:00"), salle: "Salle 101", classe: "6ème A", id: "1", color: "blue", type: "Cours" },
    { title: "Physique - Évaluation", start: new Date("2025-02-02T14:00"), end: new Date("2025-02-02T16:00"), salle: "Salle 203", classe: "4ème B", id: "2", color: "red", type: "Évaluation" },
    { title: "Réunion pédagogique", start: new Date("2025-01-30T11:00"), end: new Date("2025-01-30T12:30"), salle: "Bureau du directeur", classe: "Toutes classes", id: "3", color: "green", type: "Réunion" },
    { title: "Anglais", start: new Date("2025-02-08T10:30"), end: new Date("2025-02-08T12:00"), salle: "Salle 302", classe: "5ème C", id: "4", color: "blue", type: "Cours" },
  ]);

  const [modal, setModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [requestType, setRequestType] = useState("Changement d'horaire");
  const [requestMessage, setRequestMessage] = useState("");

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    // 📌 Ici on pourrait récupérer les événements via une API pour un professeur donné
  }, []);

  // 📌 Fonction pour afficher les détails d'un événement et proposer des actions
  const handleEventClick = (eventClick) => {
    setSelectedEvent(eventClick.event);
    toggleModal();
  };

  // 📌 Fonction pour soumettre une demande à l'administration
  const handleRequestSubmit = () => {
    if (!requestMessage.trim()) {
      Swal.fire("Erreur", "Veuillez entrer une justification", "error");
      return;
    }

    Swal.fire("Demande envoyée", "Votre demande a été transmise à l'administration.", "success");

    // 📌 Simuler l'envoi d'une requête à l'administration (à remplacer par un appel API)
    console.log("📢 Demande envoyée : ", {
      eventTitle: selectedEvent.title,
      requestType,
      requestMessage,
      salle: selectedEvent.extendedProps?.salle || "Non précisée",
      classe: selectedEvent.extendedProps?.classe || "Non précisée",
    });

    toggleModal();
  };

  return (
    <Fragment>
      <Col sm="12">
        {/* <h4>📅 Planning du Professeur</h4> */}

        {/* 📌 Affichage du calendrier avec Vue Semaine par défaut */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek" // 📌 Vue par défaut sur la semaine
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={calendarEvents.map(event => ({
            ...event,
            title: `${event.title} - ${event.classe}`, // 📌 Ajout de la classe au titre
          }))}
          eventClick={handleEventClick} // 📌 Permet au professeur de réagir à un événement
          eventColor="blue"
        />
      </Col>

      {/* 📌 Modal pour les demandes de modification */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Demande de modification</ModalHeader>
        <ModalBody>
          <p><strong>📚 Événement :</strong> {selectedEvent?.title}</p>
          <p><strong>📅 Date :</strong> {selectedEvent?.start.toLocaleString()}</p>
          <p><strong>⏳ Heure :</strong> {moment(selectedEvent?.start).format("HH:mm")} - {moment(selectedEvent?.end).format("HH:mm")}</p>
          <p><strong>🏫 Salle :</strong> {selectedEvent?.extendedProps?.salle || "Non précisée"}</p>
          <p><strong>🎓 Classe :</strong> {selectedEvent?.extendedProps?.classe || "Non précisée"}</p>
          <Form>
            <FormGroup>
              <Label for="requestType">📌 Type de demande</Label>
              <Input type="select" id="requestType" value={requestType} onChange={(e) => setRequestType(e.target.value)}>
                <option value="Changement d'horaire">Changement d'horaire</option>
                <option value="Indisponibilité">Indisponibilité</option>
                <option value="Autre">Autre</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="requestMessage">📢 Justification</Label>
              <Input
                type="textarea"
                id="requestMessage"
                value={requestMessage}
                onChange={(e) => setRequestMessage(e.target.value)}
                placeholder="Expliquez votre demande..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleRequestSubmit}>📩 Envoyer</Button>
          <Button color="secondary" onClick={toggleModal}>❌ Annuler</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ProfesseurCalendar;
