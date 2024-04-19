import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Toast from 'react-native-toast-message'

//const API_URL = 'http://greenyfarm.ru/api/v1';
const API_URL = 'http://10.0.2.2:5259/api/v1';


const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
})

// instance.interceptors.request.use(async config => {
// 	//const accessToken = await getAccessToken()

// 	//if (config.headers && accessToken)
// 	//	config.headers.Authorization = `Bearer ${accessToken}`
// 	return config
// })

export const post = async<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>{
	return new Promise((result, error) => {
		instance.post<T>(API_URL+"/"+ url, data, config).then(response => {
		  result(response.data);
		}, err => {
		  error(err);
		});
	  });
}

export const request = async <T>(config: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse<T>) => {
		console.log(response.data);
		return response.data;
	}

	const onError = (error: AxiosError<T>) => {
		Toast.show({
			type: 'error',
			text1: 'Request error',
			text2: errorCatch(error)
		})

		return Promise.reject(error)
	}
	return instance(config).then(onSuccess).catch(onError)
}

instance.interceptors.response.use(
	config => config,
	async error => {
		console.log(error);
		const originalRequest = error.config
		console.log(error);
		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				//await getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					//await deleteTokensStorage()
				}
					
			}
		}

		throw error
	}
)



const errorCatch = (error: any): string => {
	const message = error?.response?.data?.message

	return message
		? typeof error.response.data.message === 'object'
			? message[0]
			: message
		: error.message
}

export default instance
