import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Book from '../../models/Book';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: '50vh'
  }
};

interface BookCardPropTypes extends WithStyles<typeof styles> {
  book: Book;
}

const BookCard: React.FC<BookCardPropTypes> = (props: BookCardPropTypes) => {
  const { classes, book } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={book.imageUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {book.name}
        </Typography>
        <Typography component="p">
          {book.name} - {book.genre} {book.year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Link to={`/books/remove/${book._id}`}>
          <Button size="small" color="primary">
            Remove
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(BookCard);
