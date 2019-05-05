import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Book from '../../models/Book';

const styles = {
  card: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 700
  }
};

interface BookCardPropTypes {
  book: Book;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes: any;
}

const BookCard: React.FC<BookCardPropTypes> = (props: BookCardPropTypes) => {
  const { classes, book } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(BookCard);
