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


//Determine the port where you need to run it
const PORT = process.env.PORT || 3000;

//Index route
app.get('/', (req, res) => res.send("From nodejs"));



//Listen to the port/server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
