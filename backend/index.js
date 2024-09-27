const express = require("express");
const cors = require("cors");
const { initializeDatabase } = require("./db/db.connection");

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

initializeDatabase();
