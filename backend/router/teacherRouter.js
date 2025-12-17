import express from "express";

import { createTeacher, getAllTeachers, getTeachersCount } from "../controllers/teacherController.js";

const router = express.Router();

router.post('/', createTeacher);
router.get('/getall', getAllTeachers);
router.get('/count', getTeachersCount);


export default router;

