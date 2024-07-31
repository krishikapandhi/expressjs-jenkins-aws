const express = require('express');
const app = express();
const port = 8080; // You can choose any port you prefer

app.get('/show', (req, res) => {
  res.send('Hello, Express!');
});
// console.loggeed('hello')
// debugger
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
