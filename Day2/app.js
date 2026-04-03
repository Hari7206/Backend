const express = require('express');  
const app = express();             


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/home' , (req , res)=>{
    res.send("This is Home page ")
})
app.listen(3000, () => {
  console.log("Server running on port 3000");
});