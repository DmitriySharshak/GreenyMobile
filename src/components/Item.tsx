import { FC } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import appTheme from "../constants/themas";
import ImageComponent from "./ImageComponent";
import TouchableComponent from "./TouchableComponent";

interface IItemProps {
	id: number
    name: string
    iconName: any
	selectedItem: boolean 
    setSelectedItem: (id: number) => void
}

const Item: FC<IItemProps>= ({id, name, iconName, selectedItem, setSelectedItem}) => {
    
    return <>
       <TouchableComponent onPress={()=>setSelectedItem(id)} selected={selectedItem}>
        <ImageComponent iconName={iconName} selected={selectedItem}></ImageComponent>

        <Text style={{ color: (selectedItem) ? appTheme.COLORS.white : appTheme.COLORS.black, ...appTheme.FONTS.body4}}>
            {name}
        </Text>
        </TouchableComponent> 
    </>
}

export default Item;