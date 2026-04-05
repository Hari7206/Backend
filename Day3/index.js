let express = require("express");

let app = express();

app.use(express.json())
    let node = []
app.post("/notes" , (req , res)=>{
    node.push(req.body)
     res.send("Note added");
    console.log(node);
    
})
app.get("/notes", (req, res) => {
    res.send(node);
});
app.listen(3000, () => {
    console.log("app is running");
});

