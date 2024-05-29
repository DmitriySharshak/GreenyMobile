import React, { FC, PropsWithChildren } from 'react'
import { Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

export interface ITextButton extends PressableProps {
	containerStyle?: any,
    labelStyle?: any,
    label: string,
    onPress: () => void
}

const TextButton: FC<ITextButton> = ({containerStyle, label, labelStyle, onPress})=>{
    return (
        <TouchableOpacity style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent: "center",
            height:55,
            borderWidth:1,
            borderRadius:10,
            borderColor: COLORS.white,
            ...containerStyle
        }}
        onPress={onPress}
        >

        <Text style={{
           ...FONTS.h4,
           marginLeft: SIZES.radius,
           color: COLORS.black,
           ...labelStyle
        }}>{label}</Text>

        </TouchableOpacity>
    )
}

export default TextButton



