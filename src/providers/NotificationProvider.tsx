/** @format */

import React, {ReactNode, useState} from 'react';
import {INotification, NotificationContext} from '../contexts';
import NotificationPortal from '../portals/NotificationPortal';
import {v4} from 'uuid';

const NotificationProvider = ({children}: {children: ReactNode}) => {
	const [notifications, setNotifications] = useState<INotification[]>([]);

	const notify = {
		success(title: string, desc?: string) {
			setNotifications((prev) => [
				{
					id: v4(),
					title,
					desc,
					type: 'success',
				},
				...prev,
			]);
		},
		warning(title: string, desc?: string) {
			setNotifications((prev) => [
				{
					id: v4(),
					title,
					desc,
					type: 'warning',
				},
				...prev,
			]);
		},
		error(title: string, desc?: string) {
			setNotifications((prev) => [
				{
					id: v4(),
					title,
					desc,
					type: 'error',
				},
				...prev,
			]);
		},
		info(title: string, desc?: string) {
			setNotifications((prev) => [
				{
					id: v4(),
					title,
					desc,
					type: 'info',
				},
				...prev,
			]);
		},
	};

	const destroy = (id: string) => {
		setTimeout(() => {
			setNotifications((prev) => prev.filter((not) => not.id !== id));
		}, 500);
	};

	return (
		<NotificationContext.Provider
			value={{
				notifications,
				notify,
				destroy,
			}}
		>
			{children}
			<NotificationPortal />
		</NotificationContext.Provider>
	);
};

export default NotificationProvider;
