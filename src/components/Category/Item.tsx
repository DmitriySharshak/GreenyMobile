import { FC } from "react";
import ImageComponent from "../ImageComponent";
import { Text, TouchableOpacity, View } from "react-native";
import appTheme from "../../constants/themas";

interface IItemProps {
	id: number
    name: string
    imageBase64: string
	selected: boolean 
    onSelected: (id: number) => void
}

const Item: FC<IItemProps>= ({id, name, imageBase64, selected, onSelected}) => {
    
    return <TouchableOpacity
            style={{
            padding: 4,
            backgroundColor: (selected) ? appTheme.COLORS.primary : appTheme.COLORS.white,
            borderRadius: appTheme.SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: appTheme.SIZES.padding,
            marginTop: appTheme.SIZES.padding,
            }}
            onPress={() => onSelected(id)}
            >
            <ImageComponent image={imageBase64} selected={selected} size={50}></ImageComponent>
            <Text style={{color: appTheme.COLORS.darkgray, fontSize: appTheme.SIZES.base}}>{name}</Text>          

            {/* <View style={{borderTopColor: appTheme.COLORS.lightGray4, borderTopWidth:1, marginTop:4, width:"100%"}}>
                <Text style={{color: appTheme.COLORS.darkgray, fontSize: appTheme.SIZES.base}}>{name}</Text>          
            </View>      */}
        </TouchableOpacity>
}

export default Item;