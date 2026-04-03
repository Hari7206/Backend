const express = require('express');  // import
const app = express();              // create app


app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/Home', (req, res) => {
  res.send('Hello Home')
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});