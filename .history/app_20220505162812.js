const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(404)
    .json({ message: 'Hello from the server side!', app: 'natours' });
});

app.g

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
