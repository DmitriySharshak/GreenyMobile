import { Children, FC } from "react"
import { TouchableOpacity } from "react-native"
import appTheme from "../constants/themas"
import React from "react"

export interface ITouchableComponent {
    onPress: () => void
    selected: boolean
    children?: React.ReactNode;
}

const TouchableComponent:FC<ITouchableComponent>=({onPress, selected, children})=> {
    return <TouchableOpacity
            style={{
            padding: 8,
            backgroundColor: (selected) ? appTheme.COLORS.primary : appTheme.COLORS.white,
            borderRadius: appTheme.SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: appTheme.SIZES.padding,
            marginTop: appTheme.SIZES.padding,
            }}
            onPress={() => onPress()}
            >
                {children}                
            </TouchableOpacity>
}

export default TouchableComponent