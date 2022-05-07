const express = require('express');
const userController = require('./../controllers/userController')


const router = express.Router();

router
.route('/')
.get(usercgetAllUsers)
.post(userccreateUser);

router
.route('/:id')
.get(usercgetUser)
.patch(usercupdateUser)
.delete(usercdeleteUser);

module.exports = router