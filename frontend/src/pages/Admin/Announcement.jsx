import { useState, useEffect } from "react";
import {
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
} from "../../styles/AnnouncementStyles";

import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

import { getAnnouncements, postAnnouncement } from "../../api/adminapi";

const Announcement = () => {
  // State for managing announcement
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await getAnnouncements();
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newAnnouncement.trim()) return;

    try {
      const response = await postAnnouncement(newAnnouncement);
      setAnnouncements((prev) => [...prev, response.data.newAnnouncement]);
      setNewAnnouncement("");
    } catch (error) {
      console.error("Error sending announcement:", error);
    }
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Announcements</PageHeading>
        {/* Announcement Form */}
        <AnnouncementForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="announcement">Announcement:</Label>
            <TextArea
              id="announcement"
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
              required
              rows={4}
              cols={50}
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>

        {/* Display Announcements */}
        <h2>Announcements</h2>
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement._id}>
              <AnnouncementContent>
                {announcement.announcement}
              </AnnouncementContent>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </MainContent>
    </Layout>
  );
};

export default Announcement;
