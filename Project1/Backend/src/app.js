const express = require("express")
const noteModel = require("./model/note.model")
const cors = require("cors");
const app = express()
const path = require("path")




app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, "dist")))

app.post("/api/note", async (req, res) => {
    let { title, description } = req.body

    let note = await noteModel.create({
        title,
        description
    })

    res.status(201).json({
        message: " note created ",
        note
    })
})



app.get("/api/note", async (req, res) => {
    const note = await noteModel.find();

    res.status(200).json({
        message: "data fetched",
        note
    });
});


app.delete("/api/note/:id", async (req, res) => {
    const { id } = req.params;
    const deleteNote = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted",
        deleteNote
    })
})


app.patch("/api/note/:id", async (req, res) => {
  const { id } = req.params
  const { title, description } = req.body

  const updateNote = await noteModel.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  )

  res.status(200).json({
    message: "Note updated",
    updateNote
  });
})


app.get("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})
module.exports = app;