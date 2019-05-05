import express = require('express');
import mongoose = require('mongoose');
import cors = require('cors');
import expressValidator = require('express-validator');
import books from './routes/books.routes';

const port = 9000;
const mongodbUrl = 'mongodb://mongodb:27017/test';

const main = async (): Promise<void> => {
  try {
    await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true
    });
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(expressValidator());
    app.use('/books', books);
    app.listen(
      port,
      (): void => {
        console.log(`Listening at: ${port}`);
      }
    );
  } catch (mongooseConnectionError) {
    console.error(`Error: ${mongooseConnectionError}`);
    setTimeout((): void => {
      main();
    }, 5000);
  }
};
main();
