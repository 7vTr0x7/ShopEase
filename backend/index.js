import express from "express";
import cors from "cors";
import { initializeDatabase } from "./db/db.connection.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api", userRoutes);

initializeDatabase();

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
