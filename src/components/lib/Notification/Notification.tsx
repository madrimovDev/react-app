/** @format */

import React, {useEffect, useState} from 'react';
import {INotification} from '../../../contexts';
import {Alert as A, AlertDescription, AlertIcon, AlertTitle, CloseButton, Flex} from '@chakra-ui/react';
import {useNotification} from '../../../hooks';

const Notification = ({notification}: {notification: INotification}) => {
	const {destroy} = useNotification();
	const [timeoutID, setTimeoutID] = useState<number>(0);
	const [show, setShow] = useState<boolean>(false);

	const dest = () => {
		setShow(false);
		setTimeout(() => {
			destroy(notification.id);
		}, 500);
	};

	const autoDestroy = () => {
		const _id = setTimeout(() => {
			dest();
		}, 3000);
		setTimeoutID(_id);
	};

	useEffect(() => {
		autoDestroy();
		setShow(true);
	}, []);

	const stopAutoDestroy = () => {
		clearInterval(timeoutID);
	};

	return (
		<A
			onMouseEnter={stopAutoDestroy}
			onMouseLeave={autoDestroy}
			w='sm'
			borderRadius='md'
			status={notification.type}
			transform={`
				translateX(${show ? 0 : '100%'})
			`}
			transition='0.5s ease'
		>
			<AlertIcon />
			<Flex>
				<AlertTitle>{notification.title}</AlertTitle>
				{notification.desc && <AlertDescription>{notification.desc}</AlertDescription>}
			</Flex>
			<CloseButton
				onClick={dest}
				pos='absolute'
				right={2}
			/>
		</A>
	);
};

export default Notification;
