import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PageWrapper from './pages/PageWrapper';
import store from './store/store.js';
import theme from './theme/theme';

const style = {
  backgroundColor: `#dedede`
};

function App() {
  return (
    <div style={style}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <PageWrapper>
              <Switch>
                <Route path='/login'></Route>
                <PrivateRoute path='/profile'>
                  <Profile />
                </PrivateRoute>
                <Route path='/registration'></Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </PageWrapper>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
