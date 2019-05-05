import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../store/actions/books.actions';
import Book from '../../models/Book';

interface BookListPropTypes {
  books: Book[];
  fetchBooks: VoidFunction;
}

const BookList: React.FC<BookListPropTypes> = (props: BookListPropTypes) => {
  const { books, fetchBooks } = props;
  console.log(props);
  if (books.length === 0) {
    fetchBooks();
  }
  return <div>este es el listado</div>;
};

const mapStateToProps = (state: any) => ({
  books: state.books.books
});

export default connect(
  mapStateToProps,
  { fetchBooks }
)(BookList);
