import { FETCH_BOOKS, CREATE_BOOK, FETCH_BOOK } from './../actions/books.types';
import Book from '../../models/Book';

interface BooksReducer {
  books: Book[];
}

const initialState: BooksReducer = {
  books: []
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = initialState, action: any): BooksReducer => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.payload };
    case CREATE_BOOK:
      return { ...state };
    case FETCH_BOOK:
      return {
        ...state,
        books: [
          ...state.books.filter(e => e._id !== action.payload._id),
          action.payload
        ]
      };
    default:
      return { ...state };
  }
};
