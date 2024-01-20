import { Children, FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import appTheme from "../constants/themas";


export interface IImageComponent {
    selected: boolean
    iconName: any
}

const ImageComponent:FC<IImageComponent>=({selected, iconName})=> {
    return <View
            style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: (selected) ? appTheme.COLORS.white : appTheme.COLORS.lightGray,
            alignItems: "center",
            justifyContent: "center",
            }}>
            <Image 
                source={iconName}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35
                }} />
        </View>
}

export default ImageComponent