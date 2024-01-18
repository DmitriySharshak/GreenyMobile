import React, {FC, useState} from "react";
import { Text, View } from "react-native";
import themas from "../constants/themas";
import Item from "./Item";
import VerticalList from "./VerticalList";
import { ICategoryItem} from "../types/categoryItem.interface";
import HorizontalList from "./HorizontalList";

interface ICategoryProps {
    caption: string
    items: ICategoryItem[]
    onSelectedHandler: (id: number) => void
}

const CategoryList: FC<ICategoryProps> = ({caption, items, onSelectedHandler}) => {
    const [selectedItem, setSelectedItem] = useState<ICategoryItem | null>(null);
    const [index, setIndex] = useState<number>(0);

    function onSelectItem(id: number) {
        onSelectedHandler(id);

        let item = items.find((item)=> item.id == id);
        if(item) {
            setSelectedItem(item);
            let index = items.indexOf(item);
            setIndex(index);
        }
    }

    const getItemLayout = (data:ArrayLike<ICategoryItem>, index:number) => ({
        length: 97,
        offset: 97 * index,
        index,
      })

    const renderItem = ({item}: {item: ICategoryItem}) => {
        return <Item {...item} selectedItem={selectedItem?.id===item.id} setSelectedItem={onSelectItem}  />
    }

    if(selectedItem) {
        return <HorizontalList 
            snapToInterval={100}
            data={items} 
            // @ts-ignore
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            initialScrollIndex={index} />
    }
    
    return (
            <View>
                <View>
                    <Text style={{fontSize: themas.SIZES.h2}}>{caption}</Text>
                </View>
                <VerticalList
                    snapToInterval={100}
                    data={items}
                    // @ts-ignore
                    renderItem={renderItem}
                />
            </View>           
    )
}

export default CategoryList 