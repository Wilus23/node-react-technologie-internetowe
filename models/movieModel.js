const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Diuna1008',
    database: 'cruddatabase'
})

exports.getAllMovies = (req, res) =>{
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    }); 
console.log('to jest komenda get')
}


exports.postMovie = (req,res)=>{

    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)"
    db.query(sqlInsert, [movieName, movieReview], (err, res)=>{
        console.log(err)
    });
}

exports.deleteMovie = (req,res)=>{
    const name = req.params.movieName;
    // const errors = "SET SQL_SAFE_UPDATES = 0;"
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";

    // db.query(errors)
    db.query(sqlDelete, name, (err,result)=>{
        if(err)console.log(err)

        console.log('deleted')
    })
}

exports.updateMovie = (req,res)=>{
    const name = req.body.movieName;
    const review = req.body.movieReview;
    // const errors = "SET SQL_SAFE_UPDATES = 0;"
    const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";

    // db.query(errors)
    db.query(sqlUpdate, [review, name], (err,result)=>{
        if(err)console.log(err)
        console.log(name)
        console.log('updated')
    })
}