import React, {useState} from "react";
import { Text, View } from "react-native";
import themas from "../constants/themas";
import Item from "./Item";
import HorizontalList from "./HorizontalList";
import VerticalList from "./VerticalList";
import { IItem } from "../types/item.interface";
import images from "../constants/images";

const categoryItems:Array<IItem> = [
    {   id: 1, 
        name:'Мясо', 
        iconName: images.meat
    },
    {   id: 2, 
        name:'Молоко +', 
        iconName: images.cheese
    },
    {   id: 3, 
        name:'Птица', 
        iconName: images.chicken
    },
    {   id: 4, 
        name:'Яйцо', 
        iconName: images.eggs
    },
    { 
        id: 5, 
        name:'Овощи', 
        iconName: images.vegetables
    },  
    {   id: 6, 
        name:'Фрукты', 
        iconName: images.fruits
    },
    {   id: 7, 
        name:'Ягоды', 
        iconName: images.berries
    },
    {   id: 8, 
        name:'Грибы', 
        iconName: images.mushroom
    },
    {   id: 9, 
        name:'Мед +', 
        iconName: images.honey
    },
    {   id: 10, 
        name:'Масла', 
        iconName: images.oil
    }
]; 

const CategoryList = () => {
    const [categories, setCategories] = useState(categoryItems);
    const [selectedItem, setSelectedItem] = useState<IItem | null>(null);

    function onSelectItem(category: IItem) {
        setSelectedItem(category)
    }
    

    const renderItem = ({item}: {item: IItem}) => {
        return <Item item={item} selectedItem={selectedItem?.id===item.id} setSelectedItem={onSelectItem}  />
    }

    if(selectedItem) {
        return <HorizontalList
                snapToInterval={100}
                data={categories}
                //keyExtractor={ item => `${item.id}`}
                extraData={selectedItem}
                // @ts-ignore
                renderItem={renderItem}
                />
    }
    
    return (
            <View>
                <View>
                    <Text style={{fontSize: themas.SIZES.h2}}>Категории</Text>
                </View>
                <VerticalList
                    snapToInterval={100}
                    data={categories}
                    // @ts-ignore
                    renderItem={renderItem}
                />
            </View>           
    )
}

export default CategoryList 