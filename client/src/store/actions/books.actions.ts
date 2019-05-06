import LibraryApi from '../../api/library.api';
import Book from '../../models/Book';
import {
  FETCH_BOOKS,
  CREATE_BOOK,
  FETCH_BOOK,
  DELETE_BOOK
} from './books.types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchBooks = () => async (dispatch: any) => {
  const result = await LibraryApi.get<Book[]>('/books');
  dispatch({
    type: FETCH_BOOKS,
    payload: result.data
  });
};

export const createBook = (book: Book) => async (dispatch: any) => {
  await LibraryApi.post<Book>('/books', book);
  dispatch({
    type: CREATE_BOOK
  });
  const result = await LibraryApi.get<Book[]>('/books');
  dispatch({
    type: FETCH_BOOKS,
    payload: result.data
  });
};

export const fetchBook = (id: string) => async (dispatch: any) => {
  const result = await LibraryApi.get<Book>(`/books/${id}`);
  dispatch({
    type: FETCH_BOOK,
    payload: result.data
  });
};

export const deleteBook = (id: string) => async (dispatch: any) => {
  await LibraryApi.delete(`/books/${id}`);
  dispatch({
    type: DELETE_BOOK
  });
  const result = await LibraryApi.get<Book[]>('/books');
  dispatch({
    type: FETCH_BOOKS,
    payload: result.data
  });
};
