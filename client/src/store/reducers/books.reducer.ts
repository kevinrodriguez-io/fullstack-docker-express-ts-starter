import { FETCH_BOOKS } from './../actions/books.types';
import Book from '../../models/Book';

const initialState = {
  books: [] as Book[]
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.payload };
    default:
      return { ...state };
  }
};
