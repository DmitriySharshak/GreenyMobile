import React, { FC, PropsWithChildren } from 'react'
import { Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'

export interface IIconButton extends PressableProps {
	containerStyle: any,
    icon: any,
    iconStyle: any,
    onPress: () => void
}

const IconButton: FC<IIconButton> = ({containerStyle, icon, onPress})=>{
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
                    width: 25,
                    height: 25, 
                    tintColor: COLORS.black
                    }} />
        

        </TouchableOpacity>
    )
}

export default IconButton



