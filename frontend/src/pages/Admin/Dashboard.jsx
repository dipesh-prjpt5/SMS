// AdminDashboard.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
// import EventCalendar from "./EventCalender";
// import Announcement from "./Announcement";
// import Performance from "./Performance";
import axios from "axios";
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  // BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../styles/DashboardStyles";

const AdminDashboard = () => {
  // const [events, setEvents] = useState([]);
  // const [announcements, setAnnouncements] = useState([]);
  // const [studentPerformance, setStudentPerformance] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [classCount, setClassCount] = useState(0);

  // useEffect(() => {
  //   fetchEvents();
  //   fetchAnnouncements();
  //   fetchStudentPerformance();
  // }, []);

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

  // const fetchAnnouncements = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:4000/api/v1/announcements/getall"
  //     );
  //     setAnnouncements(response.data.announcements || []);
  //   } catch (error) {
  //     console.error("Error fetching announcements:", error);
  //   }
  // };

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

  const getStudentCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/count"
      );
      setStudentCount(response.data.count);
    } catch (error) {
      console.error("Error fetching student count:", error);
      return 0;
    }
  };

  const getClassCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/count"
      );
      setClassCount(response.data.count);
    } catch (error) {
      console.error("Error fetching class count:", error);
      return 0;
    }
  };

  const getTeacherCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/count"
      );
      setTeacherCount(response.data.count);
    } catch (error) {
      console.error("Error fetching teacher count:", error);
      return 0;
    }
  };

  useEffect(() => {
    getStudentCount();
    getClassCount();
    getTeacherCount();
  }, []);

  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
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

          {/* <Section>
            <EventCalendar events={events} />
          </Section> */}
        </TopContent>

        {/* <BottomContent>
          <Performance studentPerformance={studentPerformance} />
          <Announcement announcements={announcements} />
        </BottomContent> */}
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
