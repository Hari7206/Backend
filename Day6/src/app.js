const express = require("express")
const notesModel = require("./model/notesModel")
const app = express()
app.use(express.json())


app.post("/notes" , async (req , res)=>{
    const {title , description}  = req.body

  const note =  await  notesModel.create({
        title , description
    })

    res.status(201).json({
        message: "Note created succesfully",
        note
    })
})
module.exports = app