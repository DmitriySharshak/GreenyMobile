import { FC, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../hooks/useAuth"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import appTheme from "../constants/themas"
import Button from "../components/ui/button/Button"
import { AuthService } from "../services/auth.service"
import Loader from "../components/ui/Loader"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAuthFormData, IUser } from "../types/user.interface"
import Field from "../components/ui/form-elements/File"

const Auth:  FC = () => {
	const { setUser } = useAuth()

	const [isLoading, setLoading] = useState(false);

	const navigation = useTypedNavigation();

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	//const validEmail =
	///^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setLoading(true)

		AuthService.login(data.login, data.password).then((q) => {
			setLoading(false)
			setUser(q.user)
		})
	}

	function onRegister() {
		navigation.navigate('Register')
	}

    return (
		<View style={styles.container}>
				<View style={styles.containerInner}>
					<Text>Авторизация</Text>
					{isLoading ? <Loader></Loader> : ""}
					
					<Field<IAuthFormData>
						placeholder='Введите номер телефона'
						control={control}
						name='login'
						// rules={{
						// 	required: 'Укажите почту',
						// 	pattern: {
						// 		value: validEmail,
						// 		message: 'Пожалуйста, укажите правильную почту'
						// 	}
						// }}
					/>
					<Field<IAuthFormData>
						placeholder='Введите пароль'
						control={control}
						name='password'
						secureTextEntry
						// rules={{
						// 	 		required: 'Укажите пароль',
						// 				minLength: {
						// 					value: 6,
						// 					message: 'Пароль должен содержать не меньге 6 символов'
						// 				}
						// 		}}
					/>

					
					<View style={styles.register}>
						<TouchableOpacity onPress={() => onRegister()}>
					 		<Text>
								Регистрация
					 		</Text>
						</TouchableOpacity>
						<TouchableOpacity>
        					<Text>Забыли пароль?</Text>	
      					</TouchableOpacity>
					</View>
					<Button onPress={handleSubmit(onSubmit)} style={{
						backgroundColor: appTheme.COLORS.primary,
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
						height: 40,
						borderRadius: appTheme.SIZES.radius,
						marginTop: appTheme.SIZES.margin,
					}}>
						<Text style={{ 
							color: "white",
							}}>
							Вход
						</Text>
					</Button>
					
				</View>
				
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},

	containerInner: {
		width: "70%",
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	  },

	register: {
		width: "100%",
		flexDirection: "row",
		justifyContent: 'space-between',
	},
  });

export default Auth;