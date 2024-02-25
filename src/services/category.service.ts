import { request } from "./api/api.request"
import { CategoryModel } from "./api/models/CategoryModel"

export const CategoryService = {
    async getList() {
		return request<CategoryModel[]>({
			url: '/category/list',
			method: 'GET'
		})
	},

	async getVersion() {
		return request<string>({
			url: '/info/version',
			method: 'GET'
		})
	},
}


