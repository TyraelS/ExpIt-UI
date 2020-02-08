import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Card, CardActionArea, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import { fetchExpertises } from '../../ducks';
import { apiUrl, mobileDetected } from '../../utils';
import { getExpertises } from '../../selectors';

const useStyles = makeStyles(theme => ({
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		display: 'block',
		padding: '20px 0 12px'
	},
	card: {
		width: '450px',
		minHeight: '300px',
		margin: '15px 10px'
	},
	root: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		paddingBottom: '56px'
	}
}));

const Home = () => {
	const expertises = useSelector(getExpertises);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		axios.get(`${apiUrl}/expertises`).then(response => {
			dispatch(fetchExpertises(response.data));
		});
	}, [dispatch]);

	return (
		<div>
			<Typography className={classes.title} align="center" gutterBottom variant="h4">Експертизи</Typography>
			<div className={classes.root}>
				{expertises.map(expertise =>
					<Card key={expertise.id} className={classes.card} variant='outlined'>
						<CardActionArea style={{ height: mobileDetected ? '330px' : '300px' }}>
							<CardContent style={{ position: 'absolute', top: 0 }}>
								<Typography gutterBottom variant="h5" component="h2">
									{expertise.name}
								</Typography>
								<Typography variant="body2" component="p">
									Створив: {expertise.creator_name}
								</Typography>
								<Typography variant="body2" component="p">
									Альтернативи:
								</Typography>
								<div className={classes.demo}>
									<List>
										{expertise.keys.map((key, index) =>
											index < 3 &&
											<ListItem key={key}>
												<Typography variant="body2" component="p">
													- {key}
												</Typography>
											</ListItem>
										)}
										{expertise.keys.length > 3 &&
											<ListItem>
												<Typography variant="body2" component="p">
													та інші
												</Typography>
											</ListItem>}
									</List>
								</div>
								<Typography variant="body2" color="textSecondary" component="p">
									Ви можете прийняти участь в оцінці альтернатив експертизи, якщо зареєстровані.
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="medium" color="primary">
								Оцінити
		 				</Button>
							<Button size="medium" color="primary">
								Дізнатись більше
		  				</Button>
						</CardActions>
					</Card>
				)}
			</div>
		</div >
	);
};

export default Home;
