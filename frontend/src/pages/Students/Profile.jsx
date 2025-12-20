// ProfileSection.js
import React from "react";
import Sidebar from "./Sidebar";
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileInfo,
  ProfileDetail,
  Label,
  Value,
} from "../../styles/SettingsProfileStyles"; // Import styled components from ProfileSectionStyles.js
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const ProfileSection = () => {
  // Sample student profile data
  const studentProfile = {
    name: "John Doe",
    age: 18,
    grade: "12th",
    school: "Example High School",
    email: "john.doe@example.com",
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Profile</PageHeading>
        <ProfileInfo>
          <ProfileDetail>
            <Label>Name:</Label>
            <Value>{studentProfile.name}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Age:</Label>
            <Value>{studentProfile.age}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Grade:</Label>
            <Value>{studentProfile.grade}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>School:</Label>
            <Value>{studentProfile.school}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Email:</Label>
            <Value>{studentProfile.email}</Value>
          </ProfileDetail>
        </ProfileInfo>
      </MainContent>
    </Layout>
  );
};

export default ProfileSection;
