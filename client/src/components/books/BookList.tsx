import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../store/actions/books.actions';
import Book from '../../models/Book';
import BookCard from './BookCard';
import { Button } from '@material-ui/core';

interface BookListPropTypes {
  books: Book[];
  fetchBooks: VoidFunction;
}

const BookList: React.FC<BookListPropTypes> = (props: BookListPropTypes) => {
  const { books, fetchBooks } = props;
  if (books.length === 0) {
    fetchBooks();
  }
  return (
    <>
      <Button variant="contained" color="primary">
        Create new book
      </Button>
      {books.map(book => (
        <div style={{ margin: '20px' }} key={book._id}>
          <BookCard book={book} />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  books: state.books.books
});

export default connect(
  mapStateToProps,
  { fetchBooks }
)(BookList);
