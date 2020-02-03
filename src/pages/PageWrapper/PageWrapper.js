import React, { Fragment } from 'react';
import indigo from '@material-ui/core/colors/indigo';
import Container from '@material-ui/core/Container';
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
    backgroundColor: white,
    padding: 0
  }
})(Container);

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
    <PageWrapper maxWidth='md'>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.text} to={mobileDetected ? '' : '/'}>
              ExpIt
            </Link>
          </Typography>
          {!mobileDetected && !loggedIn && (
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
      {children}
      {mobileDetected && (
        <BottomNavigationStyled
          onChange={(event, newValue) => {}}
          showLabels
          className={classes.root}>
          <BottomNavigationAction
            component={Link}
            to='/'
            className={classes.icon}
            label='Головна'
            icon={<Home />}
          />
          <BottomNavigationAction
            component={Link}
            to='/expertises'
            className={classes.icon}
            label='Експертизи'
            icon={<ListAlt />}
          />
          <BottomNavigationAction
            component={Link}
            to='/profile'
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
