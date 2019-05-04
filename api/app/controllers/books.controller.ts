import express = require('express');
import BookModel from '../models/book.model';

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
  const validationResult = await req.getValidationResult();
  if (!validationResult.isEmpty()) {
    res.status(500).send(validationResult.array());
    return;
  }

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
    await BookModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
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
    await BookModel.findByIdAndRemove(req.params.id).exec();
    res.status(200).send();
  } catch (getBookError) {
    next(getBookError);
  }
};

export const partiallyUpdateBook = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    BookModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send();
  } catch (partialUpdateError) {
    next(partialUpdateError);
  }
};
