import express from "express";
import { getAllClasses, createClass, getClassesCount } from "../controllers/classConroller.js";

const router = express.Router();

router.get('/getall', getAllClasses);
router.post('/', createClass);
router.get('/count', getClassesCount);

export default router;


