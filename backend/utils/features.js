import jwt from "jsonwebtoken";

import { config } from "dotenv";

config({ path: "D:/shopease/backend/.env" });

export const sendCookie = async (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    })
    .json({
      message,
    });
};
