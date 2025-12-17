import express from "express";
import { getAllStudents, createStudent, getStudentCount } from "../controllers/studentController.js";

const router = express.Router();

router.get('/getall', getAllStudents);
router.get("/count", getStudentCount);
router.post('/', createStudent);


export default router;


