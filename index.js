const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
const uri = "mongodb://localhost:27017/Project1";
const bookRouter = require("../Project1/router/books");

async function connectToMongoDB(){
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();

app.use("/books", bookRouter);

app.listen(4000, () => console.log("Connected to port 4000"));

