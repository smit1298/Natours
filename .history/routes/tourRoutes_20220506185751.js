const express = require('express');
const tourController = require('./../controllers/tourController')


const router = express.Router();


router
.route('/')
.get(tourControlegetAllTours)
.post(tourControlecreateTour);

router
.route('/:id')
.get(tourControlegetTour)
.patch(tourControleupdateTour)
.delete(tourControledeleteTour);

module.exports = router;