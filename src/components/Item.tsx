import { FC } from "react";
import ImageComponent from "./ImageComponent";
import TouchableComponent from "./TouchableComponent";

interface IItemProps {
	id: number
    name: string
    image: string
	selected: boolean 
    onSelected: (id: number) => void
}

const Item: FC<IItemProps>= ({id, name, image, selected, onSelected}) => {
    
    return <>
       <TouchableComponent onPress={()=>onSelected(id)} selected={selected}>
        <ImageComponent image={image} selected={selected} size={40}></ImageComponent>

        {/* <Text style={{ color: (selectedItem) ? appTheme.COLORS.white : appTheme.COLORS.black, ...appTheme.FONTS.body4}}>
            {name}
        </Text> */}
        </TouchableComponent> 
    </>
}

export default Item;