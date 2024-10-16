const express = require('express');
const app = express();
const port = 8888; // You can choose any port you prefer

// Add this route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.get('/show', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
