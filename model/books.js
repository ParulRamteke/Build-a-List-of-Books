const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number
}, { collection:'Build_a_List_of_Books'});

const Book = mongoose.model("Book", booksSchema);
module.exports = Book;
