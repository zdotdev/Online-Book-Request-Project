import express, { Router } from 'express'
import {
  addBook,
  deleteBookById,
  editBook,
  getAllBooks,
  getBookByTitle,
  getbookByID
} from '../controllers/controller.js'

const router = express.Router()

router.get('/getAllBooks', getAllBooks)
router.get('/title/:title', getBookByTitle)
router.get('/id/:id', getbookByID)
router.post('/addBook', addBook)
router.put('/editBook/:id', editBook)
router.delete('/delete/:id', deleteBookById)

export default router
