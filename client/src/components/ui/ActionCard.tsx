import React, { ReactNode } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

interface ActionCardPropTypes {
  title: string;
  primaryButtonText: string;
  onPrimaryButtonClick: VoidFunction;
  secondaryButtonText: string;
  onSecondaryButtonClick: VoidFunction;
  children?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes: any;
}

const ActionCard: React.FC<ActionCardPropTypes> = (
  props: ActionCardPropTypes
) => {
  const {
    classes,
    title,
    children,
    onPrimaryButtonClick,
    onSecondaryButtonClick,
    primaryButtonText,
    secondaryButtonText
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography component="div">{children}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onSecondaryButtonClick}>
          {secondaryButtonText}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={onPrimaryButtonClick}
        >
          {primaryButtonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ActionCard);
