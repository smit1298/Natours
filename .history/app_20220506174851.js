const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const 


const app = express();

// MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//   START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
