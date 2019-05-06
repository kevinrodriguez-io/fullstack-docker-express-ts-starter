import React from 'react';
import { connect } from 'react-redux';
import { editBook, fetchBook } from '../../store/actions/books.actions';
import { useState } from 'react';
import ActionCard from '../ui/ActionCard';
import { History } from 'history';
import { match } from 'react-router';
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles,
  TextField
} from '@material-ui/core';
import Book from '../../models/Book';

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  });

interface Params {
  id: string;
}

interface EditBookPropTypes extends WithStyles<typeof styles> {
  history: History;
  match: match<Params>;
  books: Book[];
  fetchBook: (id: string) => void;
  editBook: (book: Book) => void;
}

interface State {
  _id?: string;
  name: string;
  genre?: string;
  year: number;
  imageUrl?: string;
  didSetBook: boolean;
}

const EditBook: React.FC<EditBookPropTypes> = (props: EditBookPropTypes) => {
  const [state, setState] = useState<State>({
    name: '',
    genre: '',
    year: 1900,
    imageUrl: '',
    didSetBook: false
  });
  const { history, classes, books, fetchBook, match } = props;
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
  if (!state.didSetBook) {
    setState({
      ...book,
      didSetBook: true
    });
  }
  console.log({ state });
  const editBook = () => {
    props.editBook({ ...state });
    history.goBack();
  };
  const returnToBooks = () => {
    history.goBack();
  };
  return (
    <ActionCard
      onPrimaryButtonClick={editBook}
      primaryButtonText="Edit book"
      onSecondaryButtonClick={returnToBooks}
      secondaryButtonText="Return"
      title={`Edit ${state.name}`}
    >
      <div className={classes.container}>
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={state.name}
          onChange={e => {
            setState({ ...state, name: e.target.value });
          }}
        />
        <TextField
          id="genre"
          label="Genre"
          className={classes.textField}
          value={state.genre}
          onChange={e => {
            setState({ ...state, genre: e.target.value });
          }}
        />
        <TextField
          id="year"
          label="Year"
          className={classes.textField}
          value={state.year}
          type="number"
          onChange={e => {
            setState({ ...state, year: parseInt(e.target.value) });
          }}
        />
        <TextField
          id="imageUrl"
          label="Image Url"
          className={classes.textField}
          value={state.imageUrl}
          type="url"
          onChange={e => {
            setState({
              ...state,
              imageUrl: e.target.value
            });
          }}
        />
      </div>
    </ActionCard>
  );
};

const mapStateToProps = (state: any) => ({
  books: state.books.books
});

export default connect(
  mapStateToProps,
  { fetchBook, editBook }
)(withStyles(styles)(EditBook));
