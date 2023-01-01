/** @format */

import React, {ReactNode, useState} from 'react';
import {INotification, Notification, NotificationContext} from '../contexts';
import NotificationPortal from '../portals/NotificationPortal';
import {v4} from 'uuid';

const NotificationProvider = ({children}: {children: ReactNode}) => {
	const [notifications, setNotifications] = useState<INotification[]>([]);

	const open = (notification: Notification) => {
		setNotifications((prev) => [
			{
				id: v4(),
				...notification,
			},
			...prev,
		]);
	};

	const destroy = (id: string) => {
		setNotifications((prev) => prev.filter((not) => not.id !== id));
	};

	return (
		<NotificationContext.Provider
			value={{
				notifications,
				open,
				destroy,
			}}
		>
			{children}
			<NotificationPortal />
		</NotificationContext.Provider>
	);
};

export default NotificationProvider;
