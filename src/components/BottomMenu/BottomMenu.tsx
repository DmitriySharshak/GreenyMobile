import { FC } from "react";
import { View } from "react-native";
import { TypeNavigate } from "./menu.interface";
import { menuItems } from "./menu.data";
import { StyleSheet } from "react-native";
import Item from "./Item";


interface IBottomMenu {
	navigate: TypeNavigate
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({navigate, currentRoute}) => {
    return (
        <View style ={styles.footer}>
            {menuItems.map(item => (
				<Item key={item.path} item={item} navigate={navigate} currentRoute={currentRoute} />
			))}
        </View>
    )
}

const styles = StyleSheet.create({
	footer: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: "white",
		borderTopColor: "black",
		borderTopWidth: 0,
		padding: 8,
	}
  })

export default BottomMenu;