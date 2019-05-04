import express = require('express');
import BookModel, { Book } from '../models/book';

export const getBooks = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const books = await BookModel.find().exec();
    res.send(books);
  } catch (getBooksError) {
    next(getBooksError);
  }
};

export const getBook = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const book = await BookModel.findById(req.params.id).exec();
    if (book) {
      res.send(book);
    } else {
      res.status(404).send();
    }
  } catch (getBookError) {
    next(getBookError);
  }
};

export const createBook = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  const bookToSave = new BookModel({
    name: req.body['name'],
    genre: req.body['genre'],
    year: req.body['year'],
    imageUrl: req.body['imageUrl']
  });
  try {
    await bookToSave.save();
    res.status(201).send();
  } catch (saveBookError) {
    next(saveBookError);
  }
};

export const updateBook = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const book = await BookModel.findById(req.params.id).exec();
    if (book) {
      book.name = req.body['name'];
      book.genre = req.body['genre'];
      book.year = req.body['year'];
      book.imageUrl = req.body['imageUrl'];
      await book.save();
      res.status(200).send();
    } else {
      res.status(404).send();
    }
  } catch (findBookError) {
    next(findBookError);
  }
};

export const deleteBook = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const book = await BookModel.findById(req.params.id).exec();
    if (book) {
      await book.remove();
      res.status(200).send();
    } else {
      res.status(404).send();
    }
  } catch (getBookError) {
    next(getBookError);
  }
};
