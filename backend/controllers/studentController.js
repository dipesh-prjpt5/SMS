import { Student } from "../models/studentSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createStudent = async (req, res, next) => {
  console.log(req.body);
  const { name, registrationNumber, grade } = req.body;
  try {
    if (!name || !registrationNumber || !grade) {
      return next("Please Fill Full Form!", 400);
    }
    const student = await Student.create({
      name,
      registrationNumber,
      grade,
    });
    res.status(200).json({
      success: true,
      message: "Student Created!",
      student
    });
  } catch (err) {
    next(err);
  }
};

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    if (!students) {
      res.status(404).json({
        success: false,
        message: "No Students Found!",
        students: [],
      });
    }
    res.status(200).json({
      success: true,
      students,
    });
  } catch (err) {
    next(err);
  }
};


export const getStudentCount = async (req, res, next) => {
  try {
    const count = await Student.countDocuments();
    res.status(200).json({
      success: true,
      count
    });
  } catch (err) {
    next(err);
  }
}