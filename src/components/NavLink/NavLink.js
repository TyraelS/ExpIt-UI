import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) =>
	<Link to={to} style={{ textDecoration: 'none', color: 'inherit', 'WebkitTapHighlightColor': 'transparent' }}>
		{children}
	</Link>;

export default NavLink;
