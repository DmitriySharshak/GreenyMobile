import { Image, Text, TextInput, View } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS, FONTS, SIZES, icons } from "../../constants";
import { CheckBox, FormInput, IconButton, TextButton } from "../../components";
import { useState } from "react";

const Login = ()=> {

	const [number, setNumber] = useState("");
	const [password, setPassword] = useState("");
 	const [isVisible, setIsVisible] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	function renderTitleAndDescriptions(){
		return (
			<View>
				<Text style={{
					...FONTS.h2,
					color: COLORS.black
				}}>
					Вернуться назад
				</Text>

				<Text style={{
					...FONTS.h6,
					color: COLORS.black
				}}>
					Введите ваш номер телефона в качестве логина
				</Text>
			</View>
		)
	}

	function renderRememverMeAndForgotPassword(){
		return (
			<View style={{
				marginTop: SIZES.base,
				flexDirection: "row",
				justifyContent:"space-between",
			}}>
				<CheckBox 
				containerStyle={{}} 
				isSelected={rememberMe} 
				label={"Запомнить меня"} onPress={()=> setRememberMe(!rememberMe)}/>

				<TextButton 
					labelStyle={{
						color: COLORS.primary,
						...FONTS.h5
					}}
					label={"Забыли пароль"} 
					onPress={()=> {}}/>
			</View>
		)
	}

	function renderFooter(){
		return (
			<View>
				<View style={{
					flexDirection:"row",
					justifyContent:"center",
					alignContent:"center"
				}}>
					<Text style={{
						...FONTS.h5
					}}>
						Если у вас нет учетной записи
					</Text>

					<TextButton 
					    containerStyle={{
							height: null,
							borderWidth:0,
						}}
						labelStyle={{
							color: COLORS.primary,
							...FONTS.h5
						}}
						label={"Зарегистрироваться"} onPress={()=>{}}/>
				</View>

				{/** Sign in button */}
				<TextButton
					containerStyle={{
						marginTop: SIZES.base,
						backgroundColor: COLORS.primary,

					}}
					label={"Войти"}
					onPress={()=>{}}
				/>
				
			</View>
		)
	}

	return (
		<View style={{
			flex: 1, 
			}}
		>
			<KeyboardAwareScrollView
				enableOnAndroid={true}
				keyboardDismissMode="on-drag"
				keyboardShouldPersistTaps={"handled"}
				extraScrollHeight={-300}
				contentContainerStyle={{
					flexGrow:1,
					marginTop: SIZES.radius 
				}}
			>
			{/** Title and Descriptions */}
				{renderTitleAndDescriptions()}

			{/** Form Imputs */}
			<FormInput 
				rootContainerStyle={{
					marginTop: SIZES.margin * 2
				}} 
				containerStyle={undefined} 
				inputContainerStyle={undefined} 
				inputStyle={undefined} 
				placeholder={"Введите ваш номер телефона"} 
				placeholderTextColor={"#738295"}
				
				label={"Номер телефона"} 
				value={number} 
				prependComponent={
					<Image
							source={icons.phone}
						style={{
							width:25,
							height:25
						}}
					/>
				} 
				onChange={(text: string) => setNumber(text) } 
				onPress={function (): void {
					//throw new Error("Function not implemented.");
				} } 
				editable={true} 
				securityTextEntry={false} 
				keyboardType={"numeric"} 
				autoCompleterType={"off"} 
				//autoCapitalize={"none"} 
				//maxLength={0} 
				/>

			{/** Password */}
				<FormInput
					rootContainerStyle={{
						marginTop: SIZES.margin
					}} 
					label={"Пароль"}
					placeholder={"Введите ваш пароль"}
					securityTextEntry={!isVisible} 
					value={password}
					onChange={(text: string) => setPassword(text) } 
					prependComponent={
						<Image
							source={icons.lock}
							style={{
								width:25,
								height:25
							}}
						/>
					} 

					appendComponent={
						<IconButton 
							containerStyle={{
								borderWidth: 0,
							}} 
							icon={isVisible ? icons.eye : icons.eyeClosed} 
							iconStyle={undefined} 
							onPress={() => setIsVisible(!isVisible)}							
						/>
					}
				/>


				

			{/** Remember and Forgot Password*/}
			{renderRememverMeAndForgotPassword()}

			</KeyboardAwareScrollView>
			{/** Footer*/}
			{renderFooter()}
		</View>
	)
}

export default Login;