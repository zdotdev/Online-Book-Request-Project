// @ts-nocheck
import Book from '../models/model.js'

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({})

    res.status(200).json({ allBooks })
  } catch (err) {
    console.log(err)
  }
}

export const getBookByTitle = async (req, res) => {
  const bookTitle = req.params.title
  try {
    const book = await Book.find({ titel: bookTitle })
    res.status(200).json({ book })
  } catch (err) {
    console.log(err)
  }
}

export const getbookByID = async (req, res) => {
  const bookId = req.params.id
  try {
    const book = await Book.findOne({ bookId })
    res.status(200).json({ book })
  } catch (err) {
    console.log(err)
  }
}

export const addBook = async (req, res) => {
  const { title, author, publisher, ISBN, edition, description } = req.body

  const book = new Book({
    title,
    author,
    publisher,
    ISBN,
    edition,
    description
  })
  try {
    await book.save({ Book })
    res.status(201).json({ Success: 'New Book Added' })
  } catch (err) {
    console.log(err)
  }
}

export const deleteBookById = async (req, res) => {
  const bookId = req.params.id
  try {
    await Book.findByIdAndDelete(bookId)
    res.status(200).json({ Success: 'Book has been deleted' })
  } catch (err) {
    console.log(err)
  }
}

export const editBook = async (req, res) => {
  const { title, author, publisher, ISBN, edition, description } = req.body
  const bookId = req.params.id

  try {
    await Book.findByIdAndUpdate(bookId, {
      title,
      author,
      publisher,
      ISBN,
      edition,
      description
    })
    res.status(201).json({ Success: 'Book Informarion Edited' })
  } catch (err) {
    console.log(err)
  }
}
