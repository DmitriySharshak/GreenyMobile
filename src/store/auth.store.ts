
import AsyncStorage from "@react-native-async-storage/async-storage"
import {  IUser } from "../types/user.interface"

export const getUser = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem("user")) || 'null'
		)
	} catch (e) {
		return null
	}
}

export const saveUser = async (user: IUser) => {
	try {
		await AsyncStorage.setItem("user", JSON.stringify(user))
	} catch (e) {}
}

export const deleteUser = async () => {
    await AsyncStorage.removeItem("user")
}