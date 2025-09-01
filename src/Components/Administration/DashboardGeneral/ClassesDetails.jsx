import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H5 } from '../../../AbstractElements';
// import { ActivityHoursTitle, DailyDropdown } from '../../../Constant';
// import { LightCardBoxData } from '../../../Data/OnlineCourse';
// import { ActivityHoursChartData } from '../../../Data/OnlineCourse/ChartData';
import DropdownCommon from '../../Common/Dropdown';
// import LightCardBox from './LightCardBox';

const ClassesDetails = () => {
  const Title = 'Classes Détails';
  const DailyDropdown = ["Today", "Tomorrow", "Yesterday"];

  const [schoolData, setSchoolData] = useState([]);


  useEffect(() => {
    const getEnseignants = async () => {
      try {
        // const resp = await axios.get(
        //   `http://localhost:3002/api/administration/classes-details/3FA85F64-5717-4562-B3FC-2C963F66AFA6`
        // );

        const dataTest = {
          categories: [
            "MADIALISSE 3 (CM1-CM2)",
            "DAARA",
            "MADIALISSE COLLEGE",
            "PETITE SECTION",
            "GRANDE SECTION ",
            "5e",
            "MOYENNE SECTION",
            "MADIALISSE 1 (CI-CP)",
            "MADIALISSE 2 (CE1-CE2)",
            "6e",
            "CE2",
            "3e",
            "4e",
            "CM1",
            "CE1 ",
            "CI",
            "CP",
            "CM2 ",
          ],
          data: [
            0, 1, 66, 97, 105, 134, 135, 163, 171, 175, 204, 209, 219, 222, 227,
            238, 239, 298,
          ],
        };
        
        setSchoolData(dataTest);
      } catch (error) {
        console.error("Erreur lors de la récupération des enseignants:", error);
      }
    };
    getEnseignants();
  }, []);


const ActivityHoursChartData = {
    series: [
      {
        name: "Classe",
        data:  schoolData.data || [],
        // data:  schoolData.data || [20, 14, 32, 21, 55, 15, 40],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "bar",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          // enabledOnSeries: undefined,
          top: 10,
          left: 0,
          blur: 5,
          color: "#7064F5",
          opacity: 0.35,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: schoolData.categories || [],
        // categories: schoolData.categories || ["Classe A", "Classe B", "Classe C", "Classe D", "Classe E", "Classe F", "Classe G"],
        labels: {
          style: {
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            colors: "var(--chart-text-color)",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          formatter: function (val) {
            // eslint-disable-next-line no-useless-concat
            return val + " " + "Eleves";
          },
          style: {
            fontSize: "12px",
            fontFamily: "Rubik, sans-serif",
            colors: "var(--chart-text-color)",
          },
        },
      },
      grid: {
        borderColor: "var(--chart-dashed-border)",
        strokeDashArray: 5,
      },
      colors: ["#7064F5", "#8D83FF"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          gradientToColors: ["#7064F5", "#8D83FF"],
          opacityFrom: 0.98,
          opacityTo: 0.85,
          stops: [0, 100],
        },
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 200,
            },
          },
        },
      ],
    },
  };


  return (
    <Card>
      <CardHeader className='card-no-border'>
        <div className='header-top'>
          <H5>{Title}</H5>
          <DropdownCommon dropdownMain={{ className: 'icon-dropdown', direction: 'start' }} options={DailyDropdown} iconName='icon-more-alt' btn={{ tag: 'span' }} />
        </div>
      </CardHeader>
      <CardBody className='pt-0'>
        <Row className='m-0 overall-card'>
          <Col xl='12' className='col-xl-8'>
            <div className='chart-right'>
              <Row>
                <Col xl='12' className='col-xl-12'>
                  <CardBody className='p-0'>
                    <div className='activity-wrap'>
                      <ReactApexChart type='bar' height={300} options={ActivityHoursChartData.options} series={ActivityHoursChartData.series} />
                    </div>
                  </CardBody>
                </Col>
              </Row>
            </div>
          </Col>
          {/* <Col xl='4' className='p-0'>
            <Row className='g-sm-3 g-2 mt-0'>
              {LightCardBoxData.map((item, i) => (
                <Col key={i} xl='12' md='6' sm='4'>
                  <LightCardBox data={item} key={i} />
                </Col>
              ))}
            </Row>
          </Col> */}
        </Row>
      </CardBody>
    </Card>
  );
};

export default ClassesDetails;
