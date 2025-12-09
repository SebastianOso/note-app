const express = require("express");
const notesRouter = require("./routes/notes.routes");
const { connectDB } = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;

connectDB();

app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log("Server running on", PORT));