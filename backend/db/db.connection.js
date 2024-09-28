import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "D:/shopease/backend/.env" });

const mongoUrl = process.env.MONGODB;

export const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoUrl);
    if (connection) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.log("Failed to connect to mongoDB");
  }
};
