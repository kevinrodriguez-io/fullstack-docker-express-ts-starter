import React from 'react';
import { connect } from 'react-redux';
import { fetchBook, deleteBook } from '../../store/actions/books.actions';
import ActionCard from '../ui/ActionCard';
import Book from '../../models/Book';
import { History } from 'history';
import { match } from 'react-router';

interface Params {
  id: string;
}

interface ConfirmDeleteBookPropTypes {
  history: History;
  match: match<Params>;
  books: Book[];
  fetchBook: (id: string) => void;
  deleteBook: (id: string) => void;
}

const ConfirmDeleteBook: React.FC<ConfirmDeleteBookPropTypes> = (
  props: ConfirmDeleteBookPropTypes
) => {
  const { history, match, books, fetchBook, deleteBook } = props;
  const { id } = match.params;

  const filteredBooks = books.filter(e => e._id === id);
  if (filteredBooks.length <= 0) {
    fetchBook(id);
    return (
      <ActionCard
        onPrimaryButtonClick={() => {}}
        onSecondaryButtonClick={() => {}}
        primaryButtonText="Loading"
        secondaryButtonText="Loading"
        title="Loading"
      >
        Loading...
      </ActionCard>
    );
  }

  const book = filteredBooks[0];

  const removeBook = () => {
    deleteBook(id);
    history.goBack();
  };

  const returnToBooks = () => {
    history.goBack();
  };

  return (
    <ActionCard
      onPrimaryButtonClick={removeBook}
      onSecondaryButtonClick={returnToBooks}
      primaryButtonText="Delete"
      secondaryButtonText="Return"
      title="Confirmation required"
    >
      Are you sure you want to remove the book:&nbsp;
      {book.name} -{book.year} -{book.genre}
    </ActionCard>
  );
};

const mapStateToProps = (state: any) => ({
  books: state.books.books
});

export default connect(
  mapStateToProps,
  { fetchBook, deleteBook }
)(ConfirmDeleteBook);
