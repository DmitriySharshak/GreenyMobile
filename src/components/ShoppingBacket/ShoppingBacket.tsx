import { FC } from "react";
import { IShoppingBacket } from "./ShoppingBacket.interface";
import { Button, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import appTheme from "../../constants/themas";

const ShoppingBacket: FC<IShoppingBacket> = ({min, max}) => {
    return <View style={{...styles.view}}>
        <Text style={{...styles.text}}>18.01.2024</Text>
        <Button color={appTheme.COLORS.primary} title="Корзина"></Button>
        <Text style={{...styles.text}}>320-360 р</Text>
    </View>
}

const styles = StyleSheet.create({
	view: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: appTheme.COLORS.primary,
		borderTopColor: "black",
		borderTopWidth: 2,
		padding: 10,
	},
    botton:{
        backgroundColor: appTheme.COLORS.primary,
    },
    text:{
        fontWeight:'bold',
        color: "white"
    }
  })

export default ShoppingBacket;
