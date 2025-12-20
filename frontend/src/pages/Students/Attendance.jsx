// AttendanceSection.js
import React from "react";
import Sidebar from "./Sidebar";
import {
  AttendanceContainer,
  SidebarContainer,
  Content,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  AttendanceDate,
  AttendanceStatus,
} from "../../styles/AttendanceStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const AttendanceSection = () => {
  // Sample attendance data
  const attendance = [
    { id: 1, date: "2024-05-01", present: true },
    { id: 2, date: "2024-05-02", present: false },
    { id: 3, date: "2024-05-03", present: true },
    { id: 4, date: "2024-05-04", present: true },
    { id: 5, date: "2024-05-05", present: true },
  ];

  return (
    <Layout>
      <MainContent>
        <PageHeading>Attendance</PageHeading>
        <AttendanceList>
          {attendance.map(({ id, date, present }) => (
            <AttendanceItem key={id}>
              <AttendanceDate>{date}</AttendanceDate>
              <AttendanceStatus present={present}>
                {present ? "Present" : "Absent"}
              </AttendanceStatus>
            </AttendanceItem>
          ))}
        </AttendanceList>
      </MainContent>
    </Layout>
  );
};

export default AttendanceSection;
