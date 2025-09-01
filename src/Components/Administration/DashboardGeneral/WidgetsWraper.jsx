import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Col, Row } from 'reactstrap';
// import { 
//     WidgetsGeneralDdata
// } from '../../../Data/DefaultDashboard';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';

const WidgetsWrapper = () => {

      const [widgetData, setWidgetData] = useState([]);


      useEffect(() => {
        const getEnseignants = async () => {
          try {
            // const resp = await axios.get(
            //   `http://localhost:3002/api/administration/general/3FA85F64-5717-4562-B3FC-2C963F66AFA6`
            // );

            const dataTest = [
              {
                title: "Niveaux",
                gros: 0,
                total: 18,
                color: "info",
                icon: "star",
              },
              {
                title: "Classes",
                gros: 0,
                total: 59,
                color: "secondary",
                icon: "classes",
              },
              {
                title: "Eleves",
                gros: 0,
                total: 2913,
                color: "warning",
                icon: "fill-user",
              },
              {
                title: "Enseignants",
                gros: 0,
                total: 3,
                color: "primary",
                icon: "enseignants",
              },
            ];
            setWidgetData(dataTest);
          } catch (error) {
            console.error("Erreur lors de la récupération des enseignants:", error);
          }
        };
        getEnseignants();
      }, []);

    if (!widgetData || widgetData.length === 0) {
      return <p>No data available</p>;
    }
  
    // Dynamically calculate column size if desired
    const columnSize = Math.floor(12 / widgetData.length) || 3;
  
    return (
      <Row>
        {widgetData.map((item, i) => (
          <Col sm={columnSize}  key={i}> 
            {/* Replace `item.id` with a unique key if available */}
            <Widgets1 data={item} />
          </Col>
        ))}
      </Row>
    );
  };

export default WidgetsWrapper;
