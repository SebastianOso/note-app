const express = require("express");
const notesRouter = require("./routes/notes.routes");
const { connectDB } = require("./config/database");
const rateLimiter = require("./middleware/rateLimiter")
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4002;



app.use(express.json());
app.use(rateLimiter)
app.use("/api/notes", notesRouter);

connectDB().then(() => {
    app.listen(PORT, () => console.log("Server running on", PORT));
});
