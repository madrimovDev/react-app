/** @format */
import React, {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {lazyLoad} from '../utils';

const App = lazy(async () => {
	await new Promise((res, rej) => {
		setTimeout(() => {
			res('hello');
		}, 1500);
	});
	return import('../App');
});

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: lazyLoad(<App />),
	},
	{
		path: '/hello',
		element: lazyLoad(<App />),
	},
]);

export default rootRouter;
