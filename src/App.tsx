/** @format */
import React from 'react';
import {useLocation} from 'react-router-dom';

const App = () => {
	const {pathname} = useLocation();
	return (
		<div>
			<h1>Hello WOrld {pathname}</h1>
		</div>
	);
};

export default App;
