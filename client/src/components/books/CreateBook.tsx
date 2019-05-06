import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../../store/actions/books.actions';
import { useState } from 'react';
import ActionCard from '../ui/ActionCard';
import { History } from 'history';
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

interface CreateBookPropTypes extends WithStyles<typeof styles> {
  history: History;
  createBook: (book: Book) => void;
}

interface State {
  name: string;
  genre?: string;
  year: number;
  imageUrl?: string;
}

const CreateBook: React.FC<CreateBookPropTypes> = (
  props: CreateBookPropTypes
) => {
  const [state, setState] = useState<State>({
    name: '',
    genre: '',
    year: 1900,
    imageUrl: ''
  });
  const { history, classes } = props;
  const createBook = () => {
    props.createBook({ ...state });
    history.goBack();
  };
  const returnToBooks = () => {
    history.goBack();
  };
  return (
    <ActionCard
      onPrimaryButtonClick={createBook}
      primaryButtonText="Create book"
      onSecondaryButtonClick={returnToBooks}
      secondaryButtonText="Return"
      title="Create a new book"
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

export default connect(
  null,
  { createBook }
)(withStyles(styles)(CreateBook));
