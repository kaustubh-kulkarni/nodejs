//Bring in sequelize
const sequelize = require("sequelize");
//Bring in DB
const db = require("../config/database");


//Schema for post
const Post = db.define('post', {
    title: {
        type: sequelize.STRING
    },
    content: {
        type: sequelize.STRING
    }
});

//Export the model
module.exports = Post;