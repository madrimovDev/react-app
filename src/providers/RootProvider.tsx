/** @format */

import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {RouterProvider} from 'react-router-dom';
import {rootRouter} from '../routers';

const RootProvider = () => (
	<ChakraProvider>
		<RouterProvider router={rootRouter} />
	</ChakraProvider>
);

export default RootProvider;
