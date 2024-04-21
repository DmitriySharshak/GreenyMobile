import { post, request } from "./api/api.request"
import { deleteUser, saveUser } from "../store/auth.store"
import { IUser, IUserRegister } from "../types/user.interface"

export const AuthService = {
    async login(login: string, password: string) {
		const response = await request<IUser>({
			url: '/users/login',
			method: 'POST',
            params: {login, password}
		})

        await saveUser(response)

		return response
	},

	async logout() {
		await deleteUser()
	},

	async register(user: IUserRegister) {
		const response = await request<boolean>({
		 	url: '/users/register',
		 	method: 'POST',
		 	data: user
		})

		return response
	},
}




