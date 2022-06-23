const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql')



const movieController = require('./controllers/movieController')
const usersController = require('./controllers/usersController')



// Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/users', usersController)
app.use("/api", movieController)



app.listen(3001, ()=>{
    console.log('running on port 3001')
})
// app.delete('/api/delete/:movieName', (req,res)=>{
//     const name = req.params.movieName;
//     // const errors = "SET SQL_SAFE_UPDATES = 0;"
//     const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";

//     // db.query(errors)
//     db.query(sqlDelete, name, (err,result)=>{
//         if(err)console.log(err)

//         console.log('deleted')
//     })
// })


app.get('/', (req,res)=>{
    res.send('hello there')
    console.log('hello there')
})

