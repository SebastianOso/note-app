const {Note} = require("../models/note.model")

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes")
        res.status(500).json({message:"Internal server error"})
    }
}

exports.createNote = async (req,res) => {
    try {
        const {title, content} = req.body
        const newNote = new Note({title,content})

        await newNote.save()
        res.status(201).json({message: "Note created successfully"})
    } catch (error) {
        console.error("Error in createNote")
        res.status(500).json({message:"Internal server error"})
    }
}