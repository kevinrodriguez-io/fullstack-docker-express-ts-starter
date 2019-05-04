import express = require('express');
import mongoose = require('mongoose');
import books from './routes/books';

const port = 9000;
const mongodbUrl = 'mongodb://mongodb:27017/test';

const main = async (): Promise<void> => {
  try {
    const mongooseConnection = await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true
    });
    const app = express();
    app.use(express.json());
    app.use('/books', books);
    app.listen(
      port,
      (): void => {
        console.log(`Listening at: ${port}`);
      }
    );
  } catch (mongooseConnectionError) {
    console.error(`Error: ${mongooseConnectionError}`);
  }
};
main();
