//Bring in express
const express = require("express");
//Tell app to use express
const app = express();
//Determine the port where you need to run it
const port = 3000;
//Integrating mysql
const mysql = require('mysql');


//Connection to DB
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

//Function to connect to DB using query
con.connect(function(err){
    //if there is error throw it right away
    if(err) throw err;
    console.log("Connected to DB!");

    //Query
    con.query("CREATE DATABASE mydb", function(err, result){
        if(!err){
            console.log("Database created");  
        };
        console.log("Database already exists");
        
    });
});






//Listen to the port/server
app.listen(port, () => {
    console.log('Server running at http://localhost:'+port)
});
