import React, { FC, PropsWithChildren } from 'react'
import { Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity } from 'react-native'
import appTheme from '../constants/themas'

export interface ITextButton extends PressableProps {
	containerStyle?: any,
    label: string,
    onPress: () => void
}

const TextButton: FC<ITextButton> = ({containerStyle, label, onPress})=>{
    return (
        <TouchableOpacity style={{
            flexDirection:"row",
            alignItems:"center",
            justifyContent: "center",
            height:55,
            borderWidth:1,
            borderRadius:10,
            borderColor: appTheme.COLORS.lightGray,
            ...containerStyle
        }}
        onPress={onPress}
        >

        <Text style={{
           ...appTheme.FONTS.h4,
           marginLeft: appTheme.SIZES.radius,
           color: appTheme.COLORS.secondary
        }}>{label}</Text>

        </TouchableOpacity>
    )
}

export default TextButton



