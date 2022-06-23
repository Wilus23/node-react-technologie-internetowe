const express = require('express')


// routes
const router = express.Router();
const usersModel = require('../models/usersModel')
router
    .route('/')
    .get(usersModel.getAllUsers);

console.log('hello')
module.exports = router;