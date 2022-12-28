/** @format */
import React, {lazy} from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {lazyLoad} from '../utils';

const App = lazy(async () => import('../App'));
const Login = lazy(async () => import('../pages/Login/Login'));

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: lazyLoad(<Login />),
	},
	{
		path: '/hello',
		element: lazyLoad(<App />),
	},
]);

export default rootRouter;
