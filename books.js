const express = require("express")
const BookModel = require("../models/BookModel")


const routes = express.Router()

//Get All Books
routes.get("/books", async(req, res) => {
    //res.send({message: "Get All Books"})
 try{
    const books = await BookModel.find()
    res.status(200).send(books)

 }   catch (error){
    res.status(500).send(error)
 }
    
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    //res.send({message: "Add NEW Book"})
try{
    const newBook = new BookModel(req.body)
    await newBook.save()
    res.status(200).send(newBook)

}    catch (error){
    res.status(500).send(error)

}
    
    
})
/*
{
    title: "advanced java",
    "author": "samo",
    "price": 10.50,
    "published_date": "10-14-2022"
}

*/

//Update existing Book By Id
routes.post("/books/:bookid", async (req, res) => {
    //res.send({message: "Add NEW Book"})
try{
    const updateBook = await BookModel.findByIdAndUpdate(req.params.bookid,req.body)

    res.status(200).send(updateBook)

}    catch (error){
    res.status(500).send(error)

}
    
    
})
//Delete Book By ID
routes.post("/books/:bookid", async (req, res) => {
    //res.send({message: "Add NEW Book"})
try{
    const deletedBook = await BookModel.findByIdAndUpdate(req.params.bookid,req.body)
    //await newBook.save()
    if(!deletedBook){
        res.status(500).send(error)

    }
    res.status(200).send(deletedBook)

}    catch (error){
    res.status(500).send(error)

}
    
    
})
//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes