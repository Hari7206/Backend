import express from "express"
import morgan from "morgan"


const app = express()
app.use(morgan('dev'))


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


app.listen(3000 , () => {
    console.log("app is running ");
    
})