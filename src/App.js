import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import Home from './pages/Home';
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
            <Switch>
              <Route path='/about'></Route>
              <Route path='/users'></Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
