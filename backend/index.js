import express from "express";
import cors from "cors";
import { initializeDatabase } from "./db/db.connection.js";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

initializeDatabase();

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
