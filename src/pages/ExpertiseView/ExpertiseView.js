import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ResponsiveBar } from '@nivo/bar';

import { apiUrl } from '../../utils';
import { getExpertise } from '../../selectors';
import { fetchSev } from '../../ducks/expertise';

const useStyles = makeStyles(() => ({
	title: {
		display: 'block',
		padding: '20px 0 12px'
	},
	barChart: {
		width: '100%',
		height: '400px'
	},
	root: {
		paddingBottom: '56px'
	}
}));

const getChartColors = (data, maxValue, minValue) => {
	let diff;
	const colors = [];

	if (data) {
		Object.values(data).forEach(value => {
			let color = '';

			if (value < 0) {
				const tick = Math.abs(minValue / 5).toFixed(4);

				diff = Math.abs(minValue - value).toFixed(4);
				switch (true) {
					case diff < tick:
						color = 'rgb(165, 0, 38)';
						break;
					case diff < tick * 2:
						color = 'rgb(215, 48, 39)';
						break;
					case diff < tick * 3:
						color = 'rgb(244, 109, 67)';
						break;
					case diff < tick * 4:
						color = 'rgb(253, 174, 97)';
						break;
					case diff <= tick * 5:
						color = 'rgb(254, 224, 144)';
						break;
					default:
						color = 'rgb(165, 0, 38)';
						break;
				}
			} else if (value > 0) {
				const tick = (maxValue / 5).toFixed(4);

				diff = Math.abs(maxValue - value).toFixed(4);
				switch (true) {
					case diff < tick:
						color = 'rgb(49, 54, 149)';
						break;
					case diff < tick * 2:
						color = 'rgb(69, 117, 180)';
						break;
					case diff < tick * 3:
						color = 'rgb(116, 173, 209)';
						break;
					case diff < tick * 4:
						color = 'rgb(171, 217, 233)';
						break;
					case diff <= tick * 5:
						color = 'rgb(224, 243, 248)';
						break;
					default:
						color = 'rgb(49, 54, 149)';
						break;
				}
			}
			else {
				color = false;
			}
			color && colors.push(color);
		});
	};

	return colors;
};

const generateChartData = (data) => {
	const chartData = {};
	chartData['Експертиза'] = data.name;
	if (data.result) {
		for (let [key, value] of Object.entries(data.result)) {
			chartData[key] = value;
		}
	}
	return [chartData];
}

const ExpertiseView = ({ match }) => {
	const expertise = useSelector(getExpertise);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		axios.get(`${apiUrl}/expertise?id=${match.params.expertiseId}&opinions=true&result=true`).then(response => {
			dispatch(fetchSev(response.data));
		});
	}, [dispatch]);

	const data = generateChartData(expertise);
	const chartColors = getChartColors(expertise.result, 2, -2);

	return (
		<div className={classes.root}>
			<Typography className={classes.title} align="center" gutterBottom variant="h4">Експертиза "{expertise.name}"</Typography>
			<Typography align="center" gutterBottom variant="h6">Поточні результати:</Typography>
			<div className={classes.barChart}><ResponsiveBar
				data={data}
				keys={expertise.keys}
				colors={chartColors}
				indexBy="Експертиза"
				margin={{ top: 50, right: 50, bottom: 80, left: 50 }}
				padding={0.25}
				minValue={-2}
				maxValue={2}
				groupMode="grouped"
				layout="horizontal"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Оцінка',
					legendPosition: 'middle',
					legendOffset: 32
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legendPosition: 'middle',
					legendOffset: -40
				}}
				enableGridX
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
				animate
				motionStiffness={90}
				motionDamping={15}
			/></div>
		</div>
	)
};

export default withRouter(ExpertiseView);
