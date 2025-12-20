// Classes.js
import { useState, useEffect } from "react";
import {
  ClassesContent,
  ClassesHeader,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
} from "../../styles/ClassesStyles";
import {
  Layout,
  MainContent,
  PageHeading,
  SubHeading,
} from "../../styles/UniversalStyles";
import { getClasses, postClass } from "../../api/adminapi";

const Classes = () => {
  const [newClassName, setNewClassName] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await getClasses();
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
        const response = await postClass(newClassName);
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
        <PageHeading>Classes</PageHeading>
        <AddClassForm onSubmit={handleAddClass}>
          <SubHeading>Add New Class</SubHeading>
          <AddClassInput
            type="text"
            placeholder="Enter class name"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
          />
          <AddClassButton type="submit">Add Class</AddClassButton>
        </AddClassForm>
        <SubHeading>Class List</SubHeading>
        <ClassList>
          {classes.map((classItem) => (
            <ClassItem key={classItem._id}>{classItem.grade}</ClassItem>
          ))}
        </ClassList>
      </MainContent>
    </Layout>
  );
};

export default Classes;
