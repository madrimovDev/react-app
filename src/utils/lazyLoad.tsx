/** @format */
import React, {Suspense} from 'react';

const lazyLoad = (element: React.ReactNode) => (
	<Suspense fallback='Loading'>
		{element}
	</Suspense>
);

export default lazyLoad;
