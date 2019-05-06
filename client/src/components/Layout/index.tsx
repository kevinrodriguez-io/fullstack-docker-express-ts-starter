import React from 'react';
import { useState } from 'react';

import classNames from 'classnames';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookIcon from '@material-ui/icons/Book';
import HomeIcon from '@material-ui/icons/Home';

import styles from './styles';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from '../Home';
import BookList from '../books/BookList';
import CreateBook from '../books/CreateBook';
import ConfirmDeleteBook from '../books/ConfirmDeleteBook';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardProps extends WithStyles<typeof styles> {}

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const [state, setState] = useState({
    open: false
  });
  const { classes } = props;
  const handleDrawerOpen = () => {
    setState({ open: true });
  };
  const handleDrawerClose = () => {
    setState({ open: false });
  };
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!state.open} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !state.open && classes.drawerPaperClose
            )
          }}
          open={state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/books">
              <ListItem button>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Books" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/books/new" component={CreateBook} />
            <Route
              exact
              path="/books/remove/:id"
              component={ConfirmDeleteBook}
            />
            <Route exact path="/books" component={BookList} />
          </div>
        </main>
      </div>
    </Router>
  );
};
export default withStyles(styles)(Dashboard);
