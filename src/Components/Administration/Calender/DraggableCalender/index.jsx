import DragCalendar from "./DragCalendar";
import { Container, Row } from "reactstrap";
import React, { Fragment } from "react";

const DraggableContain = () => {
  return (
    <Fragment>
      <Container fluid={true} className="calendar-basic">
        <Row>
          <DragCalendar />
        </Row>
      </Container>
    </Fragment>
  );
};
export default DraggableContain;
