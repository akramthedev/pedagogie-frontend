import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';

// new component 
import WidgetsWrapper from "./WidgetsWraper";
import ClassesDetails from "./ClassesDetails";

const OnlineCourse = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Eduos Dashboard' parent='Dashboard' title='Admin Eduos' />
      <Container fluid={true}>
        <Row>
          {/* <Col xxl='4' xl='4' md='4' className='col-ed-12 box-col-12'> */}
          <Col xs='12'>
            <WidgetsWrapper />
          </Col>

          {/* <Col xxl='4' xl='7' md='6' className='col-ed-12 box-col-7'> */}
          <Col xs='12'>
            <ClassesDetails />
          </Col>
          
        </Row>
      </Container>
    </Fragment>
  );
};

export default OnlineCourse;
