// Exam.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamForm,
  FormLabel,
  FormInput,
  AddButton,
  ExamResultsContainer,
} from "../../styles/ExamStyles";

const Exam = () => {
  const [newExamData, setnewExamData] = useState({
    name: "",
    registrationNumber: "",
    className: "",
    marks: "",
  });

  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/exam/getall"
      );
      setExams(response.data.exams);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();

    if (
      newExamData.name.trim() === "" ||
      newExamData.registrationNumber.trim() === "" ||
      newExamData.className.trim() === "" ||
      newExamData.marks === ""
    ) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/exam",
        newExamData
      );

      setExams([...exams, response.data.exam]);

      setnewExamData({
        name: "",
        registrationNumber: "",
        className: "",
        marks: "",
      });
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm onSubmit={handleAddExam}>
          <FormLabel>Name:</FormLabel>
          <FormInput
            type="text"
            value={newExamData.name}
            onChange={(e) =>
              setnewExamData({ ...newExamData, name: e.target.value })
            }
            required
          />
          <FormLabel>Registration Number:</FormLabel>
          <FormInput
            type="text"
            value={newExamData.registrationNumber}
            onChange={(e) =>
              setnewExamData({
                ...newExamData,
                registrationNumber: e.target.value,
              })
            }
            required
          />
          <FormLabel>Class:</FormLabel>
          <FormInput
            type="text"
            value={newExamData.className}
            onChange={(e) =>
              setnewExamData({ ...newExamData, className: e.target.value })
            }
            required
          />
          <FormLabel>Marks:</FormLabel>
          <FormInput
            type="number"
            value={newExamData.marks}
            onChange={(e) =>
              setnewExamData({ ...newExamData, marks: e.target.value })
            }
            required
          />
          <AddButton type="submit">Add Exam</AddButton>
        </ExamForm>
        {/* <ExamDetails>Exam Results:</ExamDetails> */}
        <ul>
          {exams.map((exam) => (
            <ExamResultsContainer key={exam._id}>
              Name: {exam.name}, Registration Number: {exam.registrationNumber},
              Class: {exam.className}, Marks: {exam.marks}
            </ExamResultsContainer>
          ))}
        </ul>
      </Content>
    </ExamContainer>
  );
};

export default Exam;
