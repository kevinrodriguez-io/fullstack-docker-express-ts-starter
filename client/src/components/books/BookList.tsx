import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../store/actions/books.actions';
import Book from '../../models/Book';
import BookCard from './BookCard';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface BookListPropTypes {
  books: Book[];
  fetchBooks: VoidFunction;
}

const BookList: React.FC<BookListPropTypes> = (props: BookListPropTypes) => {
  const [state, setState] = useState({ didFetchBooks: false });
  const { books, fetchBooks } = props;
  if (!state.didFetchBooks) {
    fetchBooks();
    setState({ didFetchBooks: true });
  }
  return (
    <>
      <Link to="/books/new">
        <Button variant="contained" color="primary">
          Create new book
        </Button>
      </Link>
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
