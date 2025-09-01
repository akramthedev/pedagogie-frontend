import React, { Component, Fragment } from "react";
import { Col, Row, FormGroup, Label, Input } from "reactstrap";
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
      calendarEvents: [], // Liste des événements du calendrier
      maquettes: [], // Liste des maquettes disponibles
      niveau: "", // Niveau sélectionné
      disciplines: [],
    };
  }

  /**
   * Chargement des données au démarrage
   */
  componentDidMount() {
    // Récupération des maquettes depuis localStorage
    const savedMaquettes = localStorage.getItem("maquetteData");
    if (savedMaquettes) {
      try {
        const maquettes = JSON.parse(savedMaquettes);
        if (Array.isArray(maquettes)) {
          this.setState({ maquettes });
        }
      } catch (error) {
        console.error("Erreur de lecture du localStorage (maquettes) :", error);
      }
    }

    // Récupération des événements du calendrier
    const savedEvents = localStorage.getItem("calendarEvents");
    if (savedEvents) {
      try {
        const calendarEvents = JSON.parse(savedEvents);
        if (Array.isArray(calendarEvents)) {
          this.setState({ calendarEvents });
        }
      } catch (error) {
        console.error(
          "Erreur de lecture du localStorage (événements) :",
          error
        );
      }
    }

    // Activer le Drag & Drop
    let draggableEl = document.getElementById("external-events");
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          return {
            title: eventEl.getAttribute("title"),
            duration: `0:${eventEl.getAttribute("data-duree")}`,
            id: uuid(),
          };
        },
      });
    }
  }

  /**
   * Sauvegarde les événements dans localStorage
   */
  saveEventsToLocalStorage = () => {
    localStorage.setItem(
      "calendarEvents",
      JSON.stringify(this.state.calendarEvents)
    );
  };

  /**
   * Gérer le choix du niveau et filtrer les disciplines
   */
  handleNiveauChange = (e) => {
    const niveau = e.target.value;
    const { maquettes } = this.state;

    const niveauMaquette = maquettes.find((m) => m.niveau === niveau);

    if (niveauMaquette) {
      const disciplines = niveauMaquette.segments.flatMap((segment) =>
        segment.disciplines.map((discipline) => ({
          ...discipline,
          activites: discipline.activites.map((activite) => ({
            ...activite,
            title: `${activite.type} (${discipline.nom})`,
            id: uuid(),
          })),
        }))
      );

      this.setState({ niveau, disciplines });
    }
  };

  /**
   * Supprime un événement du calendrier
   */
  // eventClick = (eventClick) => {
  //   Swal.fire({
  //     title: eventClick.event.title,
  //     html: `<p>Début: <strong>${moment(eventClick.event.start).format(
  //       "HH:mm"
  //     )}</strong></p>
  //            <p>Fin: <strong>${moment(eventClick.event.end).format(
  //              "HH:mm"
  //            )}</strong></p>`,
  //     showCancelButton: true,
  //     confirmButtonColor: "#d33",
  //     cancelButtonColor: "#3085d6",
  //     confirmButtonText: "Supprimer",
  //     cancelButtonText: "Fermer",
  //   }).then((result) => {
  //     if (result.value) {
  //       eventClick.event.remove();
  //       this.setState(
  //         (prevState) => ({
  //           calendarEvents: prevState.calendarEvents.filter(
  //             (event) => event.id !== eventClick.event.id
  //           ),
  //         }),
  //         this.saveEventsToLocalStorage
  //       );
  //       Swal.fire("Supprimé!", "L'activité a été supprimée.", "success");
  //     }
  //   });
  // };

  eventClick = (eventClick) => {
    Swal.fire({
      title: "Supprimer cet événement ?",
      html: `<p><strong>${eventClick.event.title}</strong></p>
             <p>Début: <strong>${moment(eventClick.event.start).format(
               "HH:mm"
             )}</strong></p>`,
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Supprimer",
      cancelButtonText: "Fermer",
    }).then((result) => {
      if (result.value) {
        this.setState(
          (prevState) => ({
            calendarEvents: prevState.calendarEvents.filter(
              (event) => event.id !== eventClick.event.id
            ),
          }),
          this.saveEventsToLocalStorage
        );
        Swal.fire("Supprimé!", "L'activité a été supprimée.", "success");
      }
    });
  };

  /**
   * Ajout d'un événement après un Drag & Drop
   */

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;

  //   if (!title) return;

  //   const newEvent = {
  //     title,
  //     start: info.date,
  //     end: moment(info.date).add(duree, "hours").toDate(),
  //     id: uuid(),
  //   };

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, newEvent],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
  //   const nbSeances =
  //     parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;

  //   if (!title) return;

  //   let newEvents = [];
  //   let currentDate = moment(info.date);

  //   for (let i = 0; i < nbSeances; i++) {
  //     newEvents.push({
  //       title,
  //       start: currentDate.toDate(),
  //       end: currentDate.add(duree, "hours").toDate(),
  //       id: uuid(),
  //     });

  //     // Passer à la semaine suivante pour la prochaine séance (ex: chaque lundi)
  //     currentDate = currentDate.add(1, "weeks");
  //   }

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, ...newEvents],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
  //   const nbSeances =
  //     parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;
  //   const isEvaluation =
  //     info.draggedEl.getAttribute("data-evaluation") === "true"; // Récupération du statut d'évaluation

  //   if (!title) return;

  //   let newEvents = [];
  //   let currentDate = moment(info.date);

  //   for (let i = 0; i < nbSeances; i++) {
  //     newEvents.push({
  //       title,
  //       start: currentDate.toDate(),
  //       end: currentDate.add(duree, "hours").toDate(),
  //       id: uuid(),
  //       backgroundColor: isEvaluation ? "#ff4d4d" : "#4d79ff", // 🔴 Évaluation | 🔵 Autre cours
  //       borderColor: isEvaluation ? "#cc0000" : "#0033cc", // Bordures plus foncées
  //     });

  //     // Passer à la semaine suivante pour la prochaine séance (ex: chaque lundi)
  //     currentDate = currentDate.add(1, "weeks");
  //   }

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, ...newEvents],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  // handleEventReceive = (info) => {
  //   const title = info.draggedEl.getAttribute("title");
  //   const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
  //   const nbSeances = parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;
  //   const isEvaluation = info.draggedEl.getAttribute("data-evaluation") === "true";
  //   const niveau = this.state.niveau; // Associer au niveau sélectionné

  //   if (!title) return;

  //   let newEvents = [];
  //   let currentDate = moment(info.date);

  //   for (let i = 0; i < nbSeances; i++) {
  //     // Vérification des conflits d'horaire
  //     // eslint-disable-next-line no-loop-func
  //     const conflict = this.state.calendarEvents.some((event) =>
  //       moment(event.start).isSame(currentDate, "day") &&
  //       moment(event.start).hour() === currentDate.hour()
  //     );

  //     if (conflict) {
  //       Swal.fire("Conflit détecté!", "Un autre cours est déjà prévu à cet horaire.", "warning");
  //       return;
  //     }

  //     newEvents.push({
  //       id: uuid(),
  //       title,
  //       start: currentDate.toDate(),
  //       end: currentDate.add(duree, "hours").toDate(),
  //       backgroundColor: isEvaluation ? "#ff4d4d" : "#4d79ff",
  //       borderColor: isEvaluation ? "#cc0000" : "#0033cc",
  //       niveau, // Ajout du niveau associé
  //       isEvaluation,
  //       dureeSeance: duree,
  //       nbSeances,
  //     });

  //     // Passer à la semaine suivante pour la prochaine séance
  //     currentDate = currentDate.add(1, "weeks");
  //   }

  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: [...prevState.calendarEvents, ...newEvents],
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  handleEventReceive = (info) => {
    const title = info.draggedEl.getAttribute("title");
    const duree = parseInt(info.draggedEl.getAttribute("data-duree")) || 1;
    const nbSeances =
      parseInt(info.draggedEl.getAttribute("data-nbSeances")) || 1;
    const isEvaluation =
      info.draggedEl.getAttribute("data-evaluation") === "true";
    const niveau = this.state.niveau; // Associer au niveau sélectionné

    if (!title) return;

    let newEvents = [];
    let currentDate = moment(info.date);
    const heureDebut = moment(info.date).format("HH:mm"); // Heure de début pour toutes les séances

    for (let i = 0; i < nbSeances; i++) {
      // Vérification des conflits d'horaire
      const conflict = this.state.calendarEvents.some(
        // eslint-disable-next-line no-loop-func
        (event) =>
          moment(event.start).isSame(currentDate, "day") &&
          moment(event.start).hour() === currentDate.hour()
      );

      if (conflict) {
        Swal.fire(
          "Conflit détecté!",
          "Un autre cours est déjà prévu à cet horaire.",
          "warning"
        );
        return;
      }

      newEvents.push({
        id: uuid(),
        title,
        start: moment(currentDate)
          .hour(heureDebut.split(":")[0])
          .minute(heureDebut.split(":")[1])
          .toDate(), // Appliquer l'heure fixe
        end: moment(currentDate)
          .hour(heureDebut.split(":")[0])
          .minute(heureDebut.split(":")[1])
          .add(duree, "hours")
          .toDate(),
        backgroundColor: isEvaluation ? "#ff4d4d" : "#4d79ff",
        borderColor: isEvaluation ? "#cc0000" : "#0033cc",
        niveau,
        isEvaluation,
        dureeSeance: duree,
        nbSeances,
      });

      // Passer à la semaine suivante pour la prochaine séance
      currentDate = currentDate.add(1, "weeks");
    }

    this.setState(
      (prevState) => ({
        calendarEvents: [...prevState.calendarEvents, ...newEvents],
      }),
      this.saveEventsToLocalStorage
    );
  };

  /**
   * Mise à jour des événements après déplacement ou redimensionnement
   */
  // handleEventChange = (changeInfo) => {
  //   this.setState(
  //     (prevState) => ({
  //       calendarEvents: prevState.calendarEvents.map((event) =>
  //         event.id === changeInfo.event.id
  //           ? {
  //               ...event,
  //               start: changeInfo.event.start,
  //               end: changeInfo.event.end,
  //             }
  //           : event
  //       ),
  //     }),
  //     this.saveEventsToLocalStorage
  //   );
  // };

  handleEventChange = (changeInfo) => {
    this.setState(
      (prevState) => ({
        calendarEvents: prevState.calendarEvents.map((event) =>
          event.id === changeInfo.event.id
            ? {
                ...event,
                start: changeInfo.event.start,
                end: changeInfo.event.end,
              }
            : event
        ),
      }),
      this.saveEventsToLocalStorage
    );
  };

  render() {
    const { maquettes, niveau, disciplines } = this.state;

    return (
      <Fragment>
        {/* Sélection du niveau */}
        <Row className="mb-3">
          <Col md={4}>
            <FormGroup>
              <Label for="niveauSelect">Sélectionner un Niveau</Label>
              <Input
                type="select"
                id="niveauSelect"
                value={niveau}
                onChange={this.handleNiveauChange}
              >
                <option value="">-- Choisir un niveau --</option>
                {maquettes.map((maquette) => (
                  <option key={maquette.id} value={maquette.niveau}>
                    {maquette.niveau}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* Liste des activités à glisser */}
        <Col xxl="3" className="box-col-12">
          <div
            id="external-events"
            style={{
              maxHeight: "600px",
              overflowY: "auto",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <h4>📚 Activités disponibles</h4>
            {disciplines.flatMap((discipline) =>
              discipline.activites.map((activite) => {
                // Vérifier si cette activité est déjà planifiée dans le calendrier
                const isAlreadyPlanned = this.state.calendarEvents.some(
                  (event) => event.title === activite.title
                );

                return (
                  <div
                    key={activite.id}
                    className="fc-event"
                    title={activite.title}
                    data-duree={activite.dureeSeance}
                    data-nbSeances={activite.nbSeances}
                    data-evaluation={activite.evaluation}
                    style={{
                      backgroundColor: activite.evaluation
                        ? "#ff4d4d"
                        : "#4d79ff",
                      color: "#fff",
                      padding: "8px",
                      borderRadius: "5px",
                      marginBottom: "5px",
                      cursor: "pointer",
                      opacity: isAlreadyPlanned ? 0.5 : 1, // Rendre plus transparent si déjà planifié
                      position: "relative",
                    }}
                  >
                    <div className="fc-event-main">
                      📖 {activite.title}
                      <br />⏳ {activite.dureeSeance}h | 🔄 {activite.nbSeances}{" "}
                      séances
                    </div>
                    {isAlreadyPlanned && (
                      <span
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "#000",
                          color: "#fff",
                          padding: "2px 5px",
                          fontSize: "10px",
                          borderRadius: "3px",
                        }}
                      >
                        ✅ Déjà ajouté
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </Col>

        {/* Calendrier */}
        <Col xxl="9" className="box-col-12">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            editable={true}
            droppable={true}
            events={this.state.calendarEvents}
            eventClick={this.eventClick}
            drop={this.handleEventReceive}
            eventChange={this.handleEventChange}
          />
        </Col>
      </Fragment>
    );
  }
}

export default DragCalendar;
