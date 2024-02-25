import { Children, FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import appTheme from "../constants/themas";


export interface IImageComponent {
    selected: boolean
    iconName: any,
    size: number, 
}

const ImageComponent:FC<IImageComponent>=({selected, iconName, size})=> {

    return <View
            style={{
            backgroundColor: (selected) ? appTheme.COLORS.white : appTheme.COLORS.lightGray,
            alignItems: "center",
            justifyContent: "center",
            width: size,
            height: size,
            borderRadius: size/2
            }}>
            <Image 
                source={iconName}
                resizeMode="contain"
                style={{
                    width: size / 2,
                    height: size / 2 }} />
        </View>
}

export default ImageComponent