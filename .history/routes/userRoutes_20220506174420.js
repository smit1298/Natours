const express = require('express');
const router = express.Router();


router
.route('/')
.get(getAllUsers)
.post(createUser);

userRouter
.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);
