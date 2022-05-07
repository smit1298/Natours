const express = require('express');
const useouter = express.Router();


userRouter
.route('/')
.get(getAllUsers)
.post(createUser);

userRouter
.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);
