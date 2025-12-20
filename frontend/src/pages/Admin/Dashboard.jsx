// AdminDashboard.js
import React, { useState, useEffect } from "react";
// import EventCalendar from "./EventCalender";
// import Announcement from "./Announcement";
// import Performance from "./Performance";
import {
  TopContent,
  Section,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../styles/DashboardStyles";

import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

import {
  getStudentCount,
  getClassCount,
  getTeacherCount,
} from "../../api/adminapi";

const AdminDashboard = () => {
  // const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  // const [studentPerformance, setStudentPerformance] = useState([]);

  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [classCount, setClassCount] = useState(0);

  // const fetchEvents = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:4000/api/v1/events/getall"
  //     );

  //     setEvents(response.data.events);
  //   } catch (error) {
  //     if (error.response?.status === 404) {
  //       setEvents([]); // no events
  //     } else {
  //       console.error("Error fetching events:", error);
  //     }
  //   }
  // };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  // const fetchStudentPerformance = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:4000/api/v1/performance/getall"
  //     );
  //     setStudentPerformance(response.data.performance || []);
  //   } catch (error) {
  //     console.error("Error fetching student performance:", error);
  //   }
  // };

  const fetchStudentCount = async () => {
    try {
      const response = await getStudentCount();
      setStudentCount(response.data.count);
    } catch (error) {
      console.error("Error fetching student count:", error);
      return 0;
    }
  };

  const fetchClassCount = async () => {
    try {
      const response = await getClassCount();
      setClassCount(response.data.count);
    } catch (error) {
      console.error("Error fetching class count:", error);
      return 0;
    }
  };

  const fetchTeacherCount = async () => {
    try {
      const response = await getTeacherCount();
      setTeacherCount(response.data.count);
    } catch (error) {
      console.error("Error fetching teacher count:", error);
      return 0;
    }
  };

  useEffect(() => {
    fetchStudentCount();
    fetchClassCount();
    fetchTeacherCount();
  }, []);

  return (
    <Layout>
      <MainContent>
        <TopContent>
          <Section>
            <PageHeading>Overview</PageHeading>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>{studentCount}</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>{teacherCount}</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>{classCount}</CardContent>
              </Card>
            </CardContainer>
          </Section>
          <Section>
            <PageHeading>Recent Assignments</PageHeading>
          </Section>
        </TopContent>
      </MainContent>
    </Layout>
  );
};

export default AdminDashboard;
