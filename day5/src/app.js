const express = require("express")

const app = express()

app.use(express.json())
let notes = []

app.post("/about", (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        "message": "note created"
    })
})

app.get("/about" , (req , res)=>{
res.status(200).json({
    "notes": notes
})
})


app.delete("/about/:id" , (req , res)=>{
    delete notes[req.params.id]

    res.status(200).json({
        "message": "note deleted"
    })
})

app.patch("/about/:id" , (req , res)=>{
  
  const id = req.params.id;

  notes[id].title = req.body.title;

    res.status(200).json({
        "message": "note deleted"
    })
})

module.exports = app