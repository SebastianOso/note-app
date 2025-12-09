const {Note} = require("../models/note.model")

exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1 })
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes")
        res.status(500).json({message:"Internal server error"})
    }
}

exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({message: "Note not found"})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in getAllNotes")
        res.status(500).json({message:"Internal server error"})
    }
}

exports.createNote = async (req,res) => {
    try {
        const {title, content} = req.body
        const newNote = new Note({title,content})

        const saved = await newNote.save()
        res.status(201).json(saved)
    } catch (error) {
        console.error("Error in createNote")
        res.status(500).json({message:"Internal server error"})
    }
}

exports.updateNote = async (req,res) => {
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            {title, content},
            {
                new: true,
            })
        if (!updatedNote) return res.status(404).json({message: "Note not found"})
        
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in updateNote")
        res.status(500).json({message:"Internal server error"})
    }
}

exports.deleteNote = async (req,res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({message: "Note not found"})
        res.json({message: "Note deleted succesfully"})
    } catch (error) {
        console.error("Error in deleteNote")
        res.status(500).json({message:"Internal server error"})
    }
}
