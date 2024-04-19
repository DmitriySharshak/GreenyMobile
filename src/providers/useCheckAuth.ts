import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth()
    
	useEffect(() => {
		console.log("useCheckAuth useEffect: routeName: "+ routeName)
		const checkAccessToken = async () => {
			//const accessToken = await getAccessToken()
			//if (accessToken) {
			//	try {
			//		await getNewTokens()
			//	} catch (e) {
			//		if (errorCatch(e) === 'jwt expired') {
			//			await AuthService.logout()
			//			setUser(null)
			//		}
			//	}
			//}
		}

		let ignore = checkAccessToken()
	}, [])

	useEffect(() => {
		const checkRefreshToken = async () => {
			//const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)
			//if (!refreshToken && user) {
			//	await AuthService.logout()
			//	setUser(null)
			//}
		}

		let ignore = checkRefreshToken()
	}, [routeName])
}