const Book = require("../model/books");

//Get all Books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        console.log(books);
        res.json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

//http://localhost:4000/books/getAllBooks

// Get specified book by year
const SpecificBookbyyear = async (req, res) => {
    try {
        const year = req.query.year;
        const books = await Book.find({year : year});
        console.log(books);
        res.json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
};

//http://localhost:4000/books/year?year=2007

// Get specified book by id
const SpecificBookbyid = async (req, res) => {
    try {
        const {id} = req.query;
        const books = await Book.findById(id);
        console.log(books);
        res.json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
//http://localhost:4000/books/id?id=663afe543464bb8646160aa6

// Create new book by POST METHOD
const createBook = async (req, res) => {
    try {
        const { author, country, imageLink, language, link, pages, title, year } = req.body;
        const newBook = new Book({ author, country, imageLink, language, link, pages, title, year });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
//http://localhost:4000/books//createBook

// PUT METHOD
const updateBookByYear = async (req, res) => {
    try {
        const {year} = req.query; 
        const { author, country, imageLink, language, link, pages, title, newYear } = req.body;
        const updatedBook = await Book.findOneAndUpdate({ year: year }, { author, country, imageLink, language, link, pages, title, year: newYear }, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json(updatedBook);
    } catch (error) {
        console.error("Error updating book by year:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
//http://localhost:4000/books/updateBookByYear/year?year=2002

//Delete Method
const deleteBook = async (req, res) => {
    try {
        const { year } = req.query;
        const deletedBook = await Book.findOneAndDelete({year:year});
        if (!deletedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
//http://localhost:4000/books/deleteBook/year?year=2002

module.exports = { getAllBooks, SpecificBookbyyear,SpecificBookbyid,createBook, updateBookByYear, deleteBook};

