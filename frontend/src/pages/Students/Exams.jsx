import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

import {
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from "../../styles/ExamStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const ExamSection = () => {
  const chartRef = useRef(null);

  const examResultsData = {
    subjects: ["Math", "Science", "English", "History"],
    results: [80, 75, 90, 85],
  };

  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: "Exam Results",
        data: examResultsData.results,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Exam Results</PageHeading>

        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
            </div>
          ))}

          <ExamChartContainer>
            <Bar ref={chartRef} data={barChartData} options={chartOptions} />
          </ExamChartContainer>
        </ExamResultsContainer>
      </MainContent>
    </Layout>
  );
};

export default ExamSection;
