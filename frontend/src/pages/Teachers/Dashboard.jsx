// TeacherDashboard.js
import React from "react";
import Sidebar from "./Sidebar";
import {
  TeacherDashboardContainer,
  Content,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../styles/DashboardStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const TeacherDashboard = () => {
  return (
    <Layout>
      <MainContent>
        <Section>
          <PageHeading>Overview</PageHeading>
          <CardContainer>
            <Card>
              <CardTitle>Total Students</CardTitle>
              <CardContent>500</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Teachers</CardTitle>
              <CardContent>50</CardContent>
            </Card>
            <Card>
              <CardTitle>Total Classes</CardTitle>
              <CardContent>50</CardContent>
            </Card>
          </CardContainer>
        </Section>

        {/* Add more sections for other parts of the admin dashboard */}
      </MainContent>
    </Layout>
  );
};

export default TeacherDashboard;
