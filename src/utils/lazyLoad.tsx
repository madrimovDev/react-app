/** @format */
import React, {Suspense} from 'react';
import {Loader} from '../components';

const lazyLoad = (element: React.ReactNode) => <Suspense fallback={<Loader />}>{element}</Suspense>;

export default lazyLoad;
