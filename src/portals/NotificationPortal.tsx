/** @format */

import {Box, Flex} from '@chakra-ui/react';
import React, {ReactNode, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import Notification from '../components/lib/Notification/Notification';
import {useNotification} from '../hooks';

const NotificationPortal = () => {
	const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
	const {notifications} = useNotification();
	useEffect(() => {
		const el = document.getElementById('notification-portal');
		if (el) {
			setRootElement(el);
		} else {
			const div = document.createElement('div');
			div.id = 'notification-portal';
			document.body.appendChild(div);
			setRootElement(div);
		}
	}, []);

	if (rootElement) {
		return createPortal(
			<Box
				w='100%'
				pos='absolute'
				h={0}
				top='0'
				left='0'
				zIndex={10}
			>
				<Flex
					pos='absolute'
					right={2}
					top={4}
					overflow='hidden'
					gap='2'
					flexDir='column'
				>
					{notifications.map((not) => {
						return (
							<Notification
								key={not.id}
								notification={not}
							/>
						);
					})}
				</Flex>
			</Box>,
			rootElement,
		);
	}
	return null;
};

export default NotificationPortal;
