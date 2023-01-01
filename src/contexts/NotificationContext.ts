/** @format */

import {createContext} from 'react';

export interface Notification {
	title: string;
	desc?: string;
	type?: 'success' | 'warning' | 'error' | 'info';
}

export interface INotification extends Notification {
	id: string;
}

interface INotificationContext {
	notifications: INotification[];
	open: (notification: Notification) => void;
	destroy: (id: string) => void;
}

const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

export default NotificationContext;
