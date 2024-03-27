import { request } from "./api/api.request"
import { CategoryModel } from "./api/models/CategoryModel"

export const CategoryService = {
    async getRoot() {
		return request<CategoryModel[]>({
			url: '/categories',
			method: 'GET'
		})
	},

	async getChildren(id: number) {
		return request<CategoryModel[]>({
			url: `/categories/${id}/descendants`,
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


