const express = require('express');
const app = express();
const port = 8888; // You can choose any port you prefer

// Route for root path
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Route for /show
app.get('/show', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
