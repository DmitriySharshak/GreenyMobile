import { FC } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import appTheme from "../constants/themas";
import { IItem } from "../types/item.interface";

interface IItemProps {
	item: IItem
	selectedItem: boolean 
    setSelectedItem: (item: IItem) => void
}

const Item: FC<IItemProps>= ({item, selectedItem, setSelectedItem}) => {
    
    return <>
       <TouchableOpacity
            style={{
            padding: 8,
            backgroundColor: (selectedItem) ? appTheme.COLORS.primary : appTheme.COLORS.white,
            borderRadius: appTheme.SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: appTheme.SIZES.padding,
            marginTop: appTheme.SIZES.padding,
        }}
        onPress={() => setSelectedItem(item)}
        >

        <View  
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: (selectedItem) ? appTheme.COLORS.white : appTheme.COLORS.lightGray
            }}>
            <Image 
                source={item.iconName}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35
                }} />
        </View>

        <Text
            style={{ color: (selectedItem) ? appTheme.COLORS.white : appTheme.COLORS.black, ...appTheme.FONTS.body4}}>
            {item.name}
        </Text>
        
        </TouchableOpacity>
    </>
}

export default Item;