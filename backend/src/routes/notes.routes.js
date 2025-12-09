const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.send("hola")
})

router.post("/", (req,res) => {
    res.send("hola")
})

router.put("/:id", (req,res) => {
    res.send("hola")
})

router.delete("/:id", (req,res) => {
    res.send("hola")
})

module.exports = router;