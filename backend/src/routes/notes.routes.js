const express = require("express")
const router = express.Router()
const notesController = require("../controllers/notes.controller")

router.get("/", notesController.getAllNotes)

router.post("/", notesController.createNote)

router.put("/:id", (req,res) => {
    res.send("hola")
})

router.delete("/:id", (req,res) => {
    res.send("hola")
})

module.exports = router;