let experss = require("express")

let app = experss()
app.use(experss.json())

let notes = []

app.post("/notes" , (req , res)=>{

    console.log(req.body);
    notes.push(req.body)
    
    res.send("app created")
})

app.get("/notes" , (req , res)=>{
   res.send(notes) 
})



app.delete("/notes/:id" , (req , res)=>{
    delete notes[req.params.id]
    res.send("app deleted")
})


app.patch("/notes/:id" , (req , res) =>{

  const id = req.params.id;

  notes[id].title = req.body.title;
    res.send("app created")
})
module.exports = app;