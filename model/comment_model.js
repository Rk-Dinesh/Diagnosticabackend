const express = require("express");
const mongoose = require("mongoose");
const db = require('../config/db')

const { Schema } = mongoose;

const commentSchema = new Schema({
    
    email : {
        type : String,
    },
   
    comment:{
        type: String,
        required : true
    },
   
});

const CommentModel = db.model('comment',commentSchema);

module.exports = CommentModel;