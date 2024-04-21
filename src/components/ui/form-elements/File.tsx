import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import appTheme from '../../../constants/themas'

export interface IField<T extends FieldValues>
	extends Omit<TextInputProps, 'onChange' | 'onChangeText' | 'value'> {
	control: Control<T>
	name: FieldPath<T>
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>
}

const Field = <T extends Record<string, any>>({control,	rules, name, ...rest}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View style={error ? styles.error: styles.normal}>
						<TextInput
							autoCapitalize={'none'}
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
							{...rest}
						/>
					</View>
					{error && <Text style={{color: "red"}}>{error.message}</Text>}
				</>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	error:{
		borderColor:'red',
		borderStyle: 'solid',
		borderTopWidth: 0.5,
		borderBottomWidth:0.5,
		borderLeftWidth:0.5,
		borderRightWidth:0.5,
		width: "100%",
		height: 30,
		marginBottom: appTheme.SIZES.margin,
	},
	normal: {
		borderColor:'black',
		borderStyle: 'solid',
		borderTopWidth: 0.5,
		borderBottomWidth:0.5,
		borderLeftWidth:0.5,
		borderRightWidth:0.5,
		width: "100%",
		height: 40,
		marginBottom: appTheme.SIZES.margin,
		

	}
  });

export default Field
