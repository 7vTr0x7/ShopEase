import express from "express";
import cors from "cors";
import { initializeDatabase } from "./db/db.connection.js";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

initializeDatabase();

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
