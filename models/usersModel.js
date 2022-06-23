const fs = require('fs');

// const usersJSON =  fs.readFile("./models/users.json", function(err, data) {
      
//     // Check for errors
//     if (err) throw err;
   
//     // Converting to JSON
//     const users = JSON.parse(data);
      
//     console.log(users); // Print users 
// });

var obj;
fs.readFile('./models/users.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
//   console.log(obj)
});


exports.getAllUsers = (req, res) =>{
    console.log('to jest komenda get');
    console.log(obj)
    // res.send(usersJSON);
    res.send(obj)
}