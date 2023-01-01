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
	notify: {
		success: (title: string, desc?: string) => void;
		warning: (title: string, desc?: string) => void;
		error: (title: string, desc?: string) => void;
		info: (title: string, desc?: string) => void;
	};
	destroy: (id: string) => void;
}

const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

export default NotificationContext;
