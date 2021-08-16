//ALl the routes to posts

//Call express
const express = require("express");
//use router
const router = express.Router();
//call database
const db = require("../config/database");
//call model
const Post = require("../models/Post");

//Get request
router.get('/', (req, res) => 
        Post.findAll()
            .then(posts => {
                console.log(posts);
                res.sendStatus(200);
            })
            .catch(err => console.log(err)));



//export it
module.exports = router;    