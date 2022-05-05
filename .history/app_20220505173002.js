const fs = require('fs');
const express = require('express');

const app = express();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));
app.get('/api/v1/tours', (req, res) =>{
  res.status(200).json({
      status: 'success',
      data: 
  })  
});

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'natours' });
// });

// app.post('/', (req, res) => {
//     res.send('you can post to this end point...')
// })

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
