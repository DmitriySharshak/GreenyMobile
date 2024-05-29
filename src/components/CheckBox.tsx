import React, { FC } from 'react'
import { Image, Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'

export interface ICheckBox extends PressableProps {
	containerStyle: any,
    isSelected: boolean,
    label: any,
    onPress: () => void
}

const CheckBox: FC<ICheckBox> = ({containerStyle, isSelected, label, onPress})=> {
    return (
        <TouchableOpacity style={{
            flexDirection:"row",
            alignItems:"center",
            ...containerStyle
            }}
            onPress={onPress}
            >

                <Image 
                    source={isSelected ? icons.checkbox_on : icons.checkbox_off}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20, 
                        tintColor: COLORS.black
                        }} /> 

                {label && 
                    <Text style={{
                        marginLeft: SIZES.margin
                    }}>
                        {label}
                    </Text>
                } 

        </TouchableOpacity>
    )
}

export default CheckBox

        {/* 
        */}

        {/*
         
        */}

        //



