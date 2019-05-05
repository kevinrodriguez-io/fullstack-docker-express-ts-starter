import { combineReducers } from 'redux';
import booksReducer from './reducers/books.reducer';
// import authReducer from './authReducer';

export default combineReducers({
  books: booksReducer
});
