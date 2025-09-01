import { Pie } from "react-chartjs-2";

const PresenceAbsenceChart = ({ presences, absences }) => {
  const data = {
    labels: ["Présences", "Absences"],
    datasets: [
      {
        data: [presences, absences],
        backgroundColor: ["#4CAF50", "#F44336"], // Vert pour les présences, Rouge pour les absences
        hoverBackgroundColor: ["#66BB6A", "#E57373"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PresenceAbsenceChart;
