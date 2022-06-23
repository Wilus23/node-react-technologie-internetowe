const express = require('express')
const movieModel = require('.././models/movieModel')
// routes
const router = express.Router();

router
    .route('/get')
    .get(movieModel.getAllMovies)

router
    .route('/insert')
    .post(movieModel.postMovie)

router
    .route('/delete/:movieName')
    .delete(movieModel.deleteMovie)

router
    .route('/update')
    .put(movieModel.updateMovie)


module.exports = router;