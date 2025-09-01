import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import DraggableCalender from './EmploiDuTemps-component/DraggableCalender';

const EmploiDuTemps = () => {
  
  return (
    <Container className="mt-4">
      {/* Informations générales */}
        <Row>
            <Col>
                <DraggableCalender />
            </Col>
        </Row>

    </Container>
  );
};

export default EmploiDuTemps;
