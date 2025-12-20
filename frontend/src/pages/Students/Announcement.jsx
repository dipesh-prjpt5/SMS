import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AnnouncementList,
  AnnouncementItem,
  AnnouncementTitle,
} from "../../styles/AnnouncementStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Announcements</PageHeading>
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement._id}>
              <AnnouncementTitle>{announcement.announcement}</AnnouncementTitle>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </MainContent>
    </Layout>
  );
};

export default AnnouncementSection;
