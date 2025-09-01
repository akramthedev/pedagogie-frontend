import { Bar } from "react-chartjs-2";

const RetardAppreciationChart = ({ retardMinutes, appreciation }) => {
  const data = {
    labels: ["Retard (min)", "Appréciation Moyenne"],
    datasets: [
      {
        label: "Données",
        data: [retardMinutes, appreciation === "Serieux" ? 10 : 5],  
        backgroundColor: ["#FFC107", "#2196F3"],  
        hoverBackgroundColor: ["#FFD54F", "#64B5F6"],
      },
    ],
  };

  return <Bar data={data} options={{ maintainAspectRatio: true }} />;
};

export default RetardAppreciationChart;
