import { FC, useState } from "react"
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import appTheme from "../constants/themas";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../components/ui/Loader";
import Field from "../components/ui/form-elements/File";
import { IUserRegister } from "../types/user.interface";
import { AuthService } from "../services/auth.service";
import Button from "../components/ui/button/Button";
import { useTypedNavigation } from "../hooks/useTypedNavigation";


const Register:  FC = () => {
  const [isLoading, setLoading] = useState(false);
  const navigation = useTypedNavigation();
  
  const { handleSubmit, reset, control } = useForm<IUserRegister>({
		mode: 'onChange'
	})

  const onSubmit: SubmitHandler<IUserRegister> = data => {
		setLoading(true)
			
		AuthService.register(data).then((q) => {
			setLoading(false)
			navigation.navigate('Login')
		})
	}

    return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text>Регистрация</Text>
        {isLoading ? <Loader></Loader> : ""}
      
	    <Field<IUserRegister>
          placeholder='Фамилия'
          control={control}
          name='lastName'
          rules={{
            required: 'Укажите фамилию',
          }}
        />

		<Field<IUserRegister>
          placeholder='Имя'
          control={control}
          name='firstName'
          rules={{
            required: 'Укажите имя',
          }}
        />

		<Field<IUserRegister>
          placeholder='Отчество'
          control={control}
          name='middleName'
        />

		<Field<IUserRegister>
			placeholder='Адрес'
			control={control}
			name='address'
			rules={{
				required: 'Укажите адрес',
			  }}
		/>

        <Field<IUserRegister>
          placeholder='Почта'
          control={control}
          name='email'
          rules={{
            required: 'Укажите почту',
          }}
        />

        <Field<IUserRegister>
          placeholder='Номер телефона'
          control={control}
          name='phoneNumber'
          rules={{
            required: 'Укажите номер телефона',
          }}
        />

        <Field<IUserRegister>
			placeholder='Пароль'
			control={control}
			name='password'
			secureTextEntry
		/>
		
      <View>
						<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					 		<Text>
								Авторизация
					 		</Text>
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
							Регистрация
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
	
  });

export default Register;