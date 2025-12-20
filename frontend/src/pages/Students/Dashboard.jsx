import {
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from "../../styles/DashboardStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const StudentDashboard = () => {
  return (
    <Layout>
      <MainContent>
        <Section>
          <PageHeading>Overview</PageHeading>
          <CardContainer>
            <Card>
              <CardTitle>Assignments</CardTitle>
              <CardContent>5</CardContent>
            </Card>
            <Card>
              <CardTitle>Performance</CardTitle>
              <CardContent>500</CardContent>
            </Card>
            <Card>
              <CardTitle>Term</CardTitle>
              <CardContent>1</CardContent>
            </Card>
          </CardContainer>
        </Section>
      </MainContent>
    </Layout>
  );
};

export default StudentDashboard;
