import { request } from "./api/api.request"
import { CategoryHash } from "../Models/Category/CategoryHash";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CategoryService = {

	async getList() {
		var hash = 0;

		return request<CategoryHash>({
			url: '/categories/'+hash,
			method: 'GET',
			params: {hash}
		})
	},
}

const key = "category";

const setItem = async (data: CategoryHash) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(data))
	} catch (e) {}
}

const getItem = async () => {
	try {
		var jsonValue = await AsyncStorage.getItem(key)
		return JSON.parse(jsonValue || 'null'
		)
	} catch (e) {
		return null
	}
}


