const express = require('express');
const fs = require('fs');


const router = express.Router();


router
.route('/')
.get(getAllTours)
.post(createTour);

router
.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour);

module.exports = router;