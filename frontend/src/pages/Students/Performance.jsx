import {
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from "../../styles/PerformanceStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const PerformanceSection = () => {
  const performanceData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [80, 85, 90, 88, 92, 85],
    totalMarks: 520,
  };

  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: "Performance Trends",
        data: performanceData.marks,
        borderColor: "#007bff",
        backgroundColor: "#007bff",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Performance</PageHeading>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line data={lineChartData} options={options} />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </MainContent>
    </Layout>
  );
};

export default PerformanceSection;
