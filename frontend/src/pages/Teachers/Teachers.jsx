// TeacherSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from "../../styles/TeachersStyles";
import { Layout, MainContent, PageHeading } from "../../styles/UniversalStyles";

const TeacherSection = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Teachers</PageHeading>
        <TeacherList>
          {teachers.map((teacher) => (
            <TeacherItem key={teacher.id}>
              {teacher.name} - {teacher.email} - {teacher.subject}
            </TeacherItem>
          ))}
        </TeacherList>
      </MainContent>
    </Layout>
  );
};

export default TeacherSection;
