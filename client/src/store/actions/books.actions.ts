import LibraryApi from '../../api/library.api';
import Book from '../../models/Book';
import { FETCH_BOOKS } from './books.types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchBooks = () => async (dispatch: any) => {
  const books = await LibraryApi.get<Book[]>('/books');
  dispatch({
    type: FETCH_BOOKS,
    payload: books.data
  });
};
