/** @format */

import React from 'react';
import classes from './loader.module.css';

const Loader = () => (
	<div className={classes.spinner_wrapper}>
		<div className={classes.spinner}></div>
	</div>
);

export default Loader;
