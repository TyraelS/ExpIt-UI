import React from 'react';

import { Container, Typography, TextField, Button, makeStyles } from '@material-ui/core';

import { mobileDetected } from '../../utils';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& .MuiTextField-root': {
			margin: theme.spacing(2),
			width: mobileDetected ? '95%' : '500px'
		}
	}
}));

const Login = () => {
	const classes = useStyles();

	return (<Container fixed style = {{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >

		<Typography variant="h6" align={ 'center' }>Реєстрація у системі</Typography>
		<form className={ classes.root } id = "LoginForm" autoComplete="off">
			<TextField
				required
				id="outlined-required"
				label="Логін"
				variant="outlined"
			/>
			<TextField
				required
				id="outlined-required"
				label="Пошта"
				variant="outlined"
			/>
			<TextField
				required
				id="outlined-password-input"
				label="Пароль"
				type="password"
				autoComplete="current-password"
				variant="outlined"
			/>
			<Button size="large" variant="contained" color="primary" style={{ width: mobileDetected ? '95%' : '500px' }}>
                Реєстрація
			</Button>
		</form>
	</Container>);
};

export default Login;
