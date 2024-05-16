import React, { FC, PropsWithChildren } from 'react'
import { Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity } from 'react-native'
import appTheme from '../constants/themas'

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
            borderColor: appTheme.COLORS.lightGray,
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
           ...appTheme.FONTS.h4,
           marginLeft: appTheme.SIZES.radius,
           color: appTheme.COLORS.secondary
        }}>{label}</Text>

        </TouchableOpacity>
    )
}

export default IconTextButton



