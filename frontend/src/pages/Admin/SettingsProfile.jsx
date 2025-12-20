// SettingsProfile.js
import React from "react";
import Sidebar from "./Sidebar";
import {
  ProfileHeader,
  ProfileDetails,
  ProfileLabel,
  ProfileInfo,
  EditButton,
} from "../../styles/SettingsProfileStyles"; // Import styled components from SettingsProfileStyles.js
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const SettingsProfile = () => {
  const teacherInfo = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    qualification: "Master of Education",
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Profile Details</PageHeading>
        <ProfileDetails>
          <ProfileLabel>Name:</ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>
          <ProfileLabel>Email:</ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>
          <ProfileLabel>Phone:</ProfileLabel>
          <ProfileInfo>{teacherInfo.phone}</ProfileInfo>
          <ProfileLabel>Address:</ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>
          <ProfileLabel>Qualification:</ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>
        <EditButton>Edit Profile</EditButton>
      </MainContent>
    </Layout>
  );
};

export default SettingsProfile;
