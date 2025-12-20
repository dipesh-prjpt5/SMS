import { useState, useEffect } from "react";
import {
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton,
} from "../../styles/AssignmentsStyles";
import {
  Layout,
  MainContent,
  PageHeading,
  SubHeading,
} from "../../styles/UniversalStyles";
import { getAssignments, postAssignment } from "../../api/adminapi";

const Assignments = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await getAssignments();
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (
      newAssignment.title.trim() !== "" &&
      newAssignment.description.trim() !== "" &&
      newAssignment.grade.trim() !== "" &&
      newAssignment.deadline.trim() !== ""
    ) {
      try {
        const response = await postAssignment(newAssignment);
        // Add the new assignment to the list
        setAssignments([...assignments, response.data.assignment]);
        // Clear the form
        setNewAssignment({
          title: "",
          description: "",
          grade: "",
          deadline: "",
        });
      } catch (error) {
        console.error("Error adding assignment:", error);
      }
    }
  };

  return (
    <Layout>
      <MainContent>
        <PageHeading>Assignments</PageHeading>
        <AddAssignmentForm onSubmit={handleAddAssignment}>
          <SubHeading>Add New Assignments</SubHeading>
          <AddAssignmentInput
            type="text"
            placeholder="Enter assignment title"
            value={newAssignment.title}
            onChange={(e) =>
              setNewAssignment({ ...newAssignment, title: e.target.value })
            }
          />
          <AddAssignmentTextArea
            placeholder="Enter assignment description"
            value={newAssignment.description}
            onChange={(e) =>
              setNewAssignment({
                ...newAssignment,
                description: e.target.value,
              })
            }
          />
          <AddAssignmentInput
            type="text"
            placeholder="Enter assignment grade"
            value={newAssignment.grade}
            onChange={(e) =>
              setNewAssignment({ ...newAssignment, grade: e.target.value })
            }
          />
          <AddAssignmentInput
            type="text"
            placeholder="Enter assignment deadline"
            value={newAssignment.deadline}
            onChange={(e) =>
              setNewAssignment({ ...newAssignment, deadline: e.target.value })
            }
          />
          <AddAssignmentButton type="submit">
            Add Assignment
          </AddAssignmentButton>
        </AddAssignmentForm>
        <AssignmentList>
          <SubHeading>Assignments List</SubHeading>
          {assignments.map((assignment) => (
            <AssignmentItem key={assignment._id}>
              <strong>{assignment.title}: </strong>
              {assignment.description}, {assignment.grade},{" "}
              {assignment.deadline}
            </AssignmentItem>
          ))}
        </AssignmentList>
      </MainContent>
    </Layout>
  );
};

export default Assignments;
