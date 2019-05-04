import express = require('express');
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  partiallyUpdateBook,
  deleteBook
} from '../controllers/books.controller';
import { validateCreateBook } from '../controllers/books.validators';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', validateCreateBook, createBook);
router.put('/:id', updateBook);
router.patch('/:id', partiallyUpdateBook);
router.delete('/:id', deleteBook);

export default router;
