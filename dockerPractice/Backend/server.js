import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.get("/health" , (req , res)=> {
    res.status(200).json({
        status: "ok"
    })
})
app.get("/api/users", (req, res) => {
    const users = [
        {
            id: 1,
            name: "Hari"
        },
        {
            id: 2,
            name: "vikas"
        }
    ];

    res.status(200).json(users);
});

app.get("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000 , () => {
    console.log("app is running ");
    
})