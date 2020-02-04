import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PageWrapper from './pages/PageWrapper';
import store from './store/store.js';
import theme from './theme/theme';

const style = {
	backgroundColor: `#dedede`
};

function App() {
	return (
		<div style={ style }>
			<Provider store={ store }>
				<ThemeProvider theme={ theme }>
					<Router>
						<PageWrapper>
							<Switch>
								<Route path="/login"><Login/></Route>
								<PrivateRoute path="/profile">
									<Profile />
								</PrivateRoute>
								<Route path="/registration"><Registration /></Route>
								<Route path="/" mainPage>
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
