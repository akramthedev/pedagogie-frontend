import React, { Fragment, useState, useEffect } from "react";
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from "sweetalert2";
import moment from "moment";
import uuid from "react-uuid";

const ProfesseurCalendar = () => {
  const [calendarEvents, setCalendarEvents] = useState([
    { title: "Cours de Mathématiques", start: new Date("2025-02-01 10:00"), id: "1", color: "blue" },
    { title: "Évaluation en Physique", start: new Date("2025-02-03 14:00"), id: "2", color: "red" },
  ]);

  const [modal, setModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("Cours");

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    // Ici on pourrait récupérer les événements via une API pour un professeur donné
  }, []);

  // 📌 Fonction pour ajouter un nouvel événement
  const handleAddEvent = () => {
    if (!eventTitle || !eventDate) {
      Swal.fire("Erreur", "Veuillez remplir tous les champs", "error");
      return;
    }

    const newEvent = {
      title: eventTitle,
      start: new Date(eventDate),
      id: uuid(),
      color: eventType === "Cours" ? "blue" : eventType === "Évaluation" ? "red" : "green",
    };

    setCalendarEvents([...calendarEvents, newEvent]);
    toggleModal();
  };

  // 📌 Fonction pour supprimer un événement
  const handleEventClick = (eventClick) => {
    Swal.fire({
      title: "Supprimer cet événement ?",
      text: eventClick.event.title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Oui, supprimer",
    }).then((result) => {
      if (result.isConfirmed) {
        setCalendarEvents(calendarEvents.filter(event => event.id !== eventClick.event.id));
        Swal.fire("Supprimé", "L'événement a été supprimé.", "success");
      }
    });
  };

  return (
    <Fragment>
      <Col sm="12">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>📅 Planning Professeur</h4>
          <Button color="primary" onClick={toggleModal}>➕ Ajouter un événement</Button>
        </div>

        {/* 📌 Affichage du calendrier */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={calendarEvents}
          eventClick={handleEventClick}
          eventColor="blue"
        />
      </Col>

      {/* 📌 Modal d'ajout d'événement */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ajouter un Événement</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="eventTitle">Titre</Label>
              <Input type="text" id="eventTitle" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="eventDate">Date et Heure</Label>
              <Input type="datetime-local" id="eventDate" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="eventType">Type</Label>
              <Input type="select" id="eventType" value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <option value="Cours">Cours</option>
                <option value="Évaluation">Évaluation</option>
                <option value="Réunion">Réunion</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddEvent}>Ajouter</Button>
          <Button color="secondary" onClick={toggleModal}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ProfesseurCalendar;
