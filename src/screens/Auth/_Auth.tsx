// import { FC, useState } from "react"
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
// import { useAuth } from "../../hooks/useAuth"
// import { useTypedNavigation } from "../../hooks/useTypedNavigation"

// import Button from "../../components/ui/button/Button"
// import { AuthService } from "../../services/auth.service"
// import Loader from "../../components/Loader"
// import { SubmitHandler, useForm } from "react-hook-form"
// import { IAuthFormData, IUser } from "../../types/user.interface"
// import Field from "../../components/ui/form-elements/File"
// import Version from "../../components/Version"
// import appTheme from "../../constants/themas"


// const Auth:  FC = () => {
// 	const { setUser } = useAuth()

// 	const [isError, setIsError] = useState(false);
// 	const [isLoading, setLoading] = useState(false);

// 	const navigation = useTypedNavigation();

// 	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
// 		mode: 'onChange'
// 	})

// 	//const validEmail =
// 	///^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 	const onSubmit: SubmitHandler<IAuthFormData> = data => {
// 		setLoading(true)
// 		setIsError(false)

// 		AuthService.login(data.login, data.password).then((data) => {
// 			setLoading(false)
			
// 			if(data) {
// 				setUser(data)
// 				navigation.navigate("TeamWork")
// 			}else {
// 				setIsError(true)		
// 			}
		   
// 		}).catch(q=> {
// 			setLoading(false)
// 			setIsError(true)
// 		})
// 	}

// 	function onRegister() {
// 		navigation.navigate('Register')
// 	}

//     return (
// 		<View style={styles.container}>
//                 <View style={{marginTop:30}}>
// 				  <Text style={{color:appTheme.COLORS.primary, fontSize:10}}>GREENY</Text>
// 				</View> 

// 				<View style={styles.containerInner}>
// 					{isLoading ? <Loader></Loader> : ""}
					
// 					<Field<IAuthFormData>
// 						placeholder='Введите номер телефона'
// 						control={control}
// 						name='login'
// 					/>
// 					<Field<IAuthFormData>
// 						placeholder='Введите пароль'
// 						control={control}
// 						name='password'
// 						secureTextEntry
// 					/>
// 					{isError ? 
// 						<View>
// 							<Text style={{color:'red', fontSize:10}}>Неверно указан номер телефона или пароль</Text>
// 						</View> 
// 						: 
// 						""
// 						}

// 					<View style={styles.register}>
// 						<TouchableOpacity onPress={() => onRegister()}>
// 					 		<Text>
// 								Регистрация
// 					 		</Text>
// 						</TouchableOpacity>
// 						<TouchableOpacity>
//         					<Text>Не могу войти</Text>	
//       					</TouchableOpacity>
// 					</View>
// 					<Button onPress={handleSubmit(onSubmit)} style={{
// 						backgroundColor: appTheme.COLORS.primary,
// 						width: "100%",
// 						alignItems: "center",
// 						justifyContent: "center",
// 						height: 40,
// 						borderRadius: appTheme.SIZES.radius,
// 						marginTop: appTheme.SIZES.margin,
// 					}}>
// 						<Text style={{ 
// 							color: "white",
// 							}}>
// 							Вход
// 						</Text>
// 					</Button>
// 				</View>

// 				<Version></Version>
// 		</View>
// 	)
// }

// const styles = StyleSheet.create({
// 	container: {
// 	  flex: 1,
// 	  backgroundColor: '#fff',
// 	  alignItems: 'center',
// 	  justifyContent: 'center',
// 	},

// 	containerInner: {
// 		width: "70%",
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	  },

// 	register: {
// 		width: "100%",
// 		flexDirection: "row",
// 		justifyContent: 'space-between',
// 	},
//   });

// export default Auth;