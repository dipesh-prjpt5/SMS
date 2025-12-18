import { Announcement } from "../models/announcementSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const createAnnouncement = async (req, res, next) => {
  const { announcement } = req.body;
  try {
    if (!announcement) {
      handleValidationError("Please Fill Form!", 400);
    }
    const newAnnouncement = await Announcement.create({ announcement });
    res.status(200).json({
      success: true,
      message: "Announcement Created!",
      newAnnouncement,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({
      success: true,
      announcements,
    });
  } catch (err) {
    next(err);
  }
};



