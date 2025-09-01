import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import uuid from "react-uuid";

class DragCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarEvents: [],
      events: this.props.maquettes?.flatMap((maquette) =>
        maquette?.matieres?.map((matiere) => ({
          title: `${matiere.nom} (${maquette.cycle})`,
          id: uuid(),
          cycle: maquette.cycle,
          matiere: matiere.nom,
          duree: matiere.duree,
        }))
      ),
    };
  }

  /**
   * Ajoute la fonctionnalité draggable aux événements de la liste
   */
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }

  /**
   * Quand on clique sur un événement, on peut le supprimer
   */
  eventClick = (eventClick) => {
    Swal.fire({
      title: eventClick.event.title,
      html: `
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <tr><td>📌 Matière</td><td><strong>${eventClick.event.extendedProps.matiere}</strong></td></tr>
            <tr><td>🎓 Professeur</td><td><strong>${eventClick.event.extendedProps.professeur || "Non attribué"}</strong></td></tr>
            <tr><td>🏫 Salle</td><td><strong>${eventClick.event.extendedProps.salle || "Non attribuée"}</strong></td></tr>
            <tr><td>⏰ Début</td><td><strong>${moment(eventClick.event.start).format("HH:mm")}</strong></td></tr>
            <tr><td>⏳ Fin</td><td><strong>${moment(eventClick.event.end).format("HH:mm")}</strong></td></tr>
          </tbody>
        </table>
      </div>`,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Supprimer le cours",
      cancelButtonText: "Fermer",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove();
        Swal.fire("Supprimé!", "Le cours a été supprimé.", "success");
      }
    });
  };

  /**
   * Lorsqu'un événement est ajouté au calendrier, on génère un cours
   */
  handleEventReceive = (info) => {
    const matiere = this.props.matieres.find(
      (m) => m.nom === info.draggedEl.getAttribute("title").split(" (")[0]
    );

    const enseignant = this.props.enseignants.find(
      (e) => e.matiere === matiere?.nom
    );
    const salle = this.props.salles[Math.floor(Math.random() * this.props.salles.length)];

    const newEvent = {
      title: info.draggedEl.getAttribute("title"),
      start: info.date,
      end: new Date(moment(info.date).add(1, "hour").valueOf()), // Ajoute 1h par défaut
      id: uuid(),
      matiere: matiere?.nom,
      professeur: enseignant?.nom || "Non défini",
      salle: salle || "Non attribuée",
    };

    this.setState({
      calendarEvents: [...this.state.calendarEvents, newEvent],
    });
  };

  render() {
    return (
      <Fragment>
        <Col xxl="3" className="box-col-12">
          <div className="md-sidebar">
            <div className="email-sidebar">
              <div id="external-events">
                <h4>📚 Matières disponibles</h4>
                {this.state.events?.map((event) => (
                  <div
                    className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event"
                    title={event.title}
                    data={event.id}
                    key={event.id}
                  >
                    <div className="fc-event-main">
                      📖 {event.title}
                    </div>
                  </div>
                ))}
                <p>
                  <input className="checkbox_animated" id="drop-remove" type="checkbox" />
                  <label htmlFor="drop-remove" className="m-0">
                    Supprimer après déplacement
                  </label>
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl="9" className="box-col-12">
          <div className="demo-app-calendar">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              editable={true}
              droppable={true}
              events={this.state.calendarEvents}
              eventClick={this.eventClick}
              drop={this.handleEventReceive}
            />
          </div>
        </Col>
      </Fragment>
    );
  }
}

export default DragCalendar;
