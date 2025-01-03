import React, { FC, PropsWithChildren } from 'react'
import { Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

export interface IIconTextButton extends PressableProps {
	containerStyle: any,
    icon: any,
    label: string,
    onPress: () => void
}

const IconTextButton: FC<IIconTextButton> = ({containerStyle, icon, label, onPress})=>{
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

        {/**Icon */}
        <Image 
                source={icon}
                resizeMode="contain"
                style={{
                    width: 30,
                    height: 30, 
                    borderRadius:15
                    }} />
        
        {/**Label */}
        <Text style={{
           ...FONTS.h4,
           marginLeft: SIZES.radius,
           color: COLORS.black
        }}>{label}</Text>

        </TouchableOpacity>
    )
}

export default IconTextButton



