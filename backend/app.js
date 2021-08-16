//Bring in express
const express = require("express");
//Tell app to use express
const app = express();
//Database config file
const db = require("./config/database")


//Test DB connection
db.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.log('Error: ' + err))


  // CORS enable header
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});



//Index route
app.get('/', (req, res) => res.send("From nodejs"));

//Posts route
app.use('/posts', require("./routes/posts"));

//Determine the port where you need to run it
const PORT = process.env.PORT || 3000;
//Listen to the port/server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
