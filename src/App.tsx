/** @format */
import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const App = () => {
	const {pathname} = useLocation();
	return (
		<div>
			<h1>Hello WOrld {pathname}</h1>
			<Link to={'/'}>login</Link>
		</div>
	);
};

export default App;
