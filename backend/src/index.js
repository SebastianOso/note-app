const express = require("express");
const notesRouter = require("./routes/notes.routes");

const app = express();

app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(4002, () => console.log("Server running on 3000"));