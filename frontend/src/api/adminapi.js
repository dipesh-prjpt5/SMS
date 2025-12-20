import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
})

//announcement APIs
export const getAnnouncements = () =>
    API.get("/announcements/getall");

export const postAnnouncement = (announcement) =>
    API.post("/announcements", { announcement });

//dashboard APIs

export const getStudentCount = () =>
    API.get("/students/count");

export const getClassCount = () =>
    API.get("/class/count");

export const getTeacherCount = () =>
    API.get("/teachers/count");

export const getAnnouncements = () =>
    


//assignment APIs
export const getAssignments = () =>
    API.get("/assignments/getall");

export const postAssignment = (assignment) =>
    API.post("/assignments", assignment);

//attendance APIs
export const getAttendance = () =>
    API.get("/students/getall");

//class APIs
export const getClasses = () =>
    API.get("/class/getall");

export const postClass = (grade) =>
    API.post("/class", { grade });

//event APIs
// i will do it later

//exam APIs
export const getExams = () =>
    API.get("/exam/getall");

export const postExam = (examData) =>
    API.post("/exam", examData);

//library APIs
export const getBooks = () =>
    API.get("/library/getall");

export const postBook = (bookData) =>
    API.post("/library/books", bookData);

//performance APIs
//not created yet

//settings APIs
//not created yet

//student APIs
export const getStudents = () =>
    API.get("/students/getall");

export const postStudent = (studentData) =>
    API.post("/students", studentData);

//teacher APIs
export const getTeachers = () =>
    API.get("/teachers/getall");

export const postTeacher = (teacherData) =>
    API.post("/teachers", teacherData);