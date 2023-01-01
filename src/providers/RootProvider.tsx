/** @format */

import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {RouterProvider} from 'react-router-dom';
import {rootRouter} from '../routers';
import NotificationProvider from './NotificationProvider';

const RootProvider = () => (
	<ChakraProvider>
		<NotificationProvider>
			<RouterProvider router={rootRouter} />
		</NotificationProvider>
	</ChakraProvider>
);

export default RootProvider;
