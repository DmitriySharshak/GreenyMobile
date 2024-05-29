import React, { FC, PropsWithChildren } from 'react'
import { Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { TextInput } from 'react-native-gesture-handler'

export interface IFormInput extends PressableProps {
	rootContainerStyle: any,
    containerStyle: any,
    inputContainerStyle: any,
    placeholder: string,
    inputStyle: any,
    label: string,
    value: string,
    prependComponent: any,
    appendComponent: any,
    onChange: (text:string) => void,
    onPress: () => void,
    editable: boolean,
    securityTextEntry: boolean,
    keyboardType:"default",
    autoCompleterType: "off",
    autoCapitalize: "none",
    maxLength:number,
    placeholderTextColor: "#738295"
}
const FormInput: FC<IFormInput> = ({
    rootContainerStyle = {},
    containerStyle,
    inputContainerStyle,
    prependComponent,
    appendComponent,
    inputStyle,
    label,
    value,
    placeholder,
    placeholderTextColor,
    securityTextEntry,
    keyboardType,
    autoCompleterType,
    autoCapitalize,
    maxLength,
    onPress,
    editable,
    onChange = () => {}

})=> {
   
    

    return (
       <View
        style={{...rootContainerStyle}}
       >

        { label != "" && 
            <Text style={{
                ...FONTS.h5,
                color: COLORS.black
            }}>
                {label}
            </Text>
        }

        <View
         style={{
             ...containerStyle 
            }}
        >
            <View style={{
                flexDirection: 'row',
                height: 50,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                backgroundColor: COLORS.lightGray,
                ...inputContainerStyle
            }}>

                {prependComponent}

                <TextInput
                    style={{
                        flex:1,
                        paddingVertical: 0,
                        color: COLORS.black,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={securityTextEntry}
                    keyboardType={keyboardType}
                    autoComplete={autoCompleterType}
                    autoCapitalize= {autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text)=>onChange(text)}
                    onPressIn={onPress}
                    editable={editable}
                />
                
                {appendComponent}    

            </View>
        </View>

       </View>
    )
}

export default FormInput



