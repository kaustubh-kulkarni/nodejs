//Bring in sequelize
const sequelize = require("sequelize");
//Bring in DB
const db = require("../config/database");


//Schema for post
const Post = db.define('posts', {
    title: {
        type: sequelize.STRING
    },
    content: {
        type: sequelize.STRING
    }
}, {
    timestamps: false
});

//Export the model
module.exports = Post;