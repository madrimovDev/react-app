/** @format */

import axios, {AxiosError} from 'axios';
const authService = {
	async login(email: string, password: string) {
		try {
			const response = await axios.post<{email: string; data: any}>('http://localhost:3121/login', {email, password});
			return {
				status: response.status,
				data: response.data,
			};
		} catch (e) {
			const error = e as unknown as AxiosError;
			console.log(error);
			return {
				status: error.response?.status,
				data: error.response?.data,
			};
		}
	},
};

export default authService;
