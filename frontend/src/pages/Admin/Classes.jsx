// Classes.js
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
} from "../../styles/ClassesStyles";
import { Layout, MainContent } from "../../styles/UniversalStyles";

const Classes = () => {
  const [newClassName, setNewClassName] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getall"
      );
      if (Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error(
          "Error fetching classes: Invalid data format",
          response.data
        );
      }
    } catch (error) {
      console.error("Error fetching classes:", error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== "") {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/class",
          { grade: newClassName }
        );
        setClasses([...classes, response.data.newClass]);
        setNewClassName("");
      } catch (error) {
        console.error("Error adding class:", error);
      }
    }
  };

  return (
    <Layout>
      <MainContent>
        <ClassesContent>
          <ClassesHeader>Classes</ClassesHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>
            {classes.map((classItem) => (
              <ClassItem key={classItem._id}>{classItem.grade}</ClassItem>
            ))}
          </ClassList>
        </ClassesContent>
      </MainContent>
    </Layout>
  );
};

export default Classes;
