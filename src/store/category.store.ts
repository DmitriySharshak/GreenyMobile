import AsyncStorage from "@react-native-async-storage/async-storage"
import { TypeUserState } from "../providers/AuthProvider"

export const getCategoryStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem("user")) || '{}'
		)
	} catch (e) {
		return null
	}
}

export const saveToStorage = async (user: TypeUserState) => {
	
	try {
		await AsyncStorage.setItem("user", JSON.stringify(user))
	} catch (e) {}
}

export const userDeleteStore = async () => {
    await AsyncStorage.removeItem("user")
}