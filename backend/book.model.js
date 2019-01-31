// Define Mongoose Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    Book_title: {
        type: String
    },
    Book_author: {
        type: String
    },
    Book_description: {
        type: String
    },
    Book_image: {
        data: Buffer,contentType: String
    },
    Book_link: {
        data: String
    } 
});

// ('Book') = model name (Book) = Schema from above 
module.exports = mongoose.model('Book', Book)