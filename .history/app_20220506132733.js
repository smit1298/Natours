const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  }

  const getTour = (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const tour = tours.find((el) => el.id === id);
  
    // if (id > tours.length){
    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  }

app.get('/api/v1/tours', getAllTours);

app.get('/api/v1/tours/:id', getTour);

app.post('/api/v1/tours', createTour);

app.patch('/api/v1/tours/:id', (req, res) => {
    const id = parseInt(req.params.id);
     if (id > tours.length){
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
});

app.delete('/api/v1/tours/:id', (req, res) => {
    const id = parseInt(req.params.id);
     if (id > tours.length){
    return res.status(404).json({ 
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
