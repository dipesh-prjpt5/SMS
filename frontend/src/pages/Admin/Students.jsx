// Students.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
} from "../../styles/StudentsStyles";
import { Layout, MainContent } from "../../styles/UniversalStyles";

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    registrationNumber: "",
    grade: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
    } catch (error) {
      if (error.response?.status === 404) {
        setStudents([]); // no students
      } else {
        console.error("Error fetching students:", error);
      }
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (
      newStudent.name.trim() !== "" &&
      newStudent.registrationNumber.trim() !== "" &&
      newStudent.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/students",
          newStudent
        );
        const createStudent = response.data.student;
        setStudents([...students, createStudent]);
        setNewStudent({ name: "", registrationNumber: "", grade: "" });
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  return (
    <Layout>
      <MainContent>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <AddStudentForm onSubmit={handleAddStudent}>
            <AddStudentInput
              type="text"
              placeholder="Enter student name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <AddStudentInput
              type="text"
              placeholder="Enter registration number"
              value={newStudent.registrationNumber}
              onChange={(e) =>
                setNewStudent({
                  ...newStudent,
                  registrationNumber: e.target.value,
                })
              }
            />
            <AddStudentInput
              type="text"
              placeholder="Enter grade"
              value={newStudent.grade}
              onChange={(e) =>
                setNewStudent({ ...newStudent, grade: e.target.value })
              }
            />
            <AddStudentButton type="submit">Add Student</AddStudentButton>
          </AddStudentForm>
          <StudentList>
            {students.map((student) => (
              <StudentItem key={student._id}>
                {student.name} - {student.registrationNumber} - {student.grade}
              </StudentItem>
            ))}
          </StudentList>
        </StudentsContent>
      </MainContent>
    </Layout>
  );
};

export default Students;
