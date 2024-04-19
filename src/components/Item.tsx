import { FC } from "react";
import ImageComponent from "./ImageComponent";
import { TouchableOpacity } from "react-native";
import appTheme from "../constants/themas";

interface IItemProps {
	id: number
    name: string
    image: string
	selected: boolean 
    onSelected: (id: number) => void
}

const Item: FC<IItemProps>= ({id, name, image, selected, onSelected}) => {
    
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
            onPress={() => onSelected(id)}
            >
            <ImageComponent image={image} selected={selected} size={40}></ImageComponent>               
        </TouchableOpacity>
}

export default Item;