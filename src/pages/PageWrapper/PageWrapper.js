import React, { Fragment } from 'react';
import indigo from '@material-ui/core/colors/indigo';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import ListAlt from '@material-ui/icons/ListAlt';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { mobileDetected } from '../../utils';

const main = indigo[500];
const white = '#fff';

const PageWrapper = withStyles({
  root: {
    minHeight: '100vh',
    maxWidth: mobileDetected ? '100%' : '1080px',
    margin: '0 auto',
    backgroundColor: white
  }
})(Paper);

const BottomNavigationStyled = withStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    borderTop: `1px solid ${main}`
  }
})(BottomNavigation);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  icon: {
    color: main
  },
  text: {
    color: white,
    textDecoration: 'none'
  },
  button: {
    margin: theme.spacing(1)
  },
  buttonAccent: {
    backgroundColor: white,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#dfdfdf'
    },
    '& a': {
      color: main,
      textDecoration: 'none'
    }
  }
}));

const Page = ({ children, loggedIn = false }) => {
  const classes = useStyles();
  return (
    <PageWrapper square>
      {!mobileDetected && (
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              <Link className={classes.text} to='/'>
                ExpIt
              </Link>
            </Typography>
            {!loggedIn && (
              <Fragment>
                <Button className={classes.button} color='inherit'>
                  <Link to='/login' className={classes.text}>
                    Увійти
                  </Link>
                </Button>
                <Button
                  className={(classes.button, classes.buttonAccent)}
                  variant='contained'
                  color='primary'>
                  <Link to='/registration'>Реєстрація</Link>
                </Button>
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      )}
      {children}
      {mobileDetected && (
        <BottomNavigationStyled
          onChange={(event, newValue) => {}}
          color='secondary'
          showLabels
          className={classes.root}>
          <BottomNavigationAction
            className={classes.icon}
            label='Головна'
            icon={<Home />}
          />
          <BottomNavigationAction
            className={classes.icon}
            label='Експертизи'
            icon={<ListAlt />}
          />
          <BottomNavigationAction
            className={classes.icon}
            label='Профіль'
            icon={<AccountCircle />}
          />
        </BottomNavigationStyled>
      )}
    </PageWrapper>
  );
};

export default withTheme(Page);
