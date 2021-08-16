//ALl the routes to posts

//Call express
const express = require("express");
//use router
const router = express.Router();
//call database
const db = require("../config/database");
//call model
const Post = require("../models/Post");

//Get all posts request
router.get('/', (req, res) => 
        Post.findAll()
            .then(documents => {
                res.status(200).json({
                    message: "Posts fetched successfully!",
                    posts: documents
                });
            })
            .catch(err => console.log(err)));

//Get specific post
router.get('/:id', (req, res) => 
            Post.findByPk(req.params.id)
                .then(post => {
                    if(post){
                        res.status(200).json(post);
                    } else {
                        res.status(404).json({
                            message: "Post not found! Please check the id"
                        });
                    }
                }));


//export it
module.exports = router;    