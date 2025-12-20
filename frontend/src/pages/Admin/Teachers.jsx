// Teachers.js
import React, { useState, useEffect } from "react";
import {
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
} from "../../styles/TeachersStyles"; // Import styled components from TeachersStyles.js
import {
  Layout,
  MainContent,
  PageHeading,
  SubHeading,
} from "../../styles/UniversalStyles";
import { getTeachers, postTeacher } from "../../api/adminapi";

const Teachers = () => {
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
      const response = await getTeachers();
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (
      newTeacher.name.trim() !== "" &&
      newTeacher.email.trim() !== "" &&
      newTeacher.subject.trim() !== ""
    ) {
      try {
        const response = await postTeacher(newTeacher);
        const createdTeacher = response.data.teacher;
        setTeachers([...teachers, createdTeacher]);
        setNewTeacher({ name: "", email: "", subject: "" });
      } catch (error) {
        console.error("Error adding teacher:", error);
      }
    }
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Teachers</PageHeading>
        <AddTeacherForm onSubmit={handleAddTeacher}>
          <SubHeading>Add New Teacher</SubHeading>
          <AddTeacherInput
            type="text"
            placeholder="Enter teacher name"
            value={newTeacher.name}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, name: e.target.value })
            }
          />
          <AddTeacherInput
            type="email"
            placeholder="Enter teacher email"
            value={newTeacher.email}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, email: e.target.value })
            }
          />
          <AddTeacherInput
            type="text"
            placeholder="Enter teacher subject"
            value={newTeacher.subject}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, subject: e.target.value })
            }
          />
          <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
        </AddTeacherForm>
        <TeacherList>
          <SubHeading>Teachers List</SubHeading>
          {teachers.map((teacher) => (
            <TeacherItem key={teacher._id}>
              {teacher.name} - {teacher.email} - {teacher.subject}
            </TeacherItem>
          ))}
        </TeacherList>
      </MainContent>
    </Layout>
  );
};

export default Teachers;
