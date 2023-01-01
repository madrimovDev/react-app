/** @format */

import {useContext} from 'react';
import {NotificationContext} from '../contexts';

const useNotification = () => useContext(NotificationContext);

export default useNotification;
