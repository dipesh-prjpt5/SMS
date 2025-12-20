// Performance.js
import React from "react";
import Sidebar from "./Sidebar";
import {
  Content,
  PerformanceContent,
  PerformanceHeader,
  SchoolPerformance,
  IndividualPerformance,
} from "../../styles/PerformanceStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const Performance = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: "John Doe", score: 90 },
    { id: 2, name: "Jane Smith", score: 85 },
    { id: 3, name: "Michael Johnson", score: 92 },
  ];

  return (
    <Layout>
      <MainContent>
        <PageHeading>School Performance</PageHeading>
        <SchoolPerformance>
          <p>Average Score: {schoolPerformanceData.averageScore}</p>
          <p>Total Students: {schoolPerformanceData.totalStudents}</p>
        </SchoolPerformance>
        <PageHeading>Individual Performance</PageHeading>
        <IndividualPerformance>
          {individualPerformanceData.map((student) => (
            <p key={student.id}>
              {student.name}: {student.score}
            </p>
          ))}
        </IndividualPerformance>
      </MainContent>
    </Layout>
  );
};

export default Performance;
