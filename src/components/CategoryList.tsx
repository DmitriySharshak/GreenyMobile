import React, {useCallback, useRef, useState} from "react";
import { Text, View } from "react-native";
import themas from "../constants/themas";
import Item from "./Item";
import VerticalList from "./VerticalList";
import { ICategoryItem, ISubCategoryItem } from "../types/categoryItem.interface";
import images from "../constants/images";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import HorizontalList from "./HorizontalList";

const categoryItems:Array<ICategoryItem> = [
    {   id: 1, 
        name:'Мясо', 
        iconName: images.meat,
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

const subCategories: Array<ISubCategoryItem> = [
    {   id: 1, 
        categoryId: 1,
        name:'Говядина', 
        iconName: images.meat,
    },
    {   id: 2, 
        categoryId: 1,
        name:'Свинина', 
        iconName: images.meat,
    },
    {   id: 3, 
        categoryId: 1,
        name:'Баранина', 
        iconName: images.meat,
    },
    {   id: 4, 
        categoryId: 1,
        name:'Телятина', 
        iconName: images.cow,
    },
    {   id: 5, 
        categoryId: 1,
        name:'Дичь', 
        iconName: images.meat,
    },
]

const CategoryList = () => {
    const [categories, setCategories] = useState(categoryItems);
    const [selectedItem, setSelectedItem] = useState<ICategoryItem | null>(null);
    const [index, setIndex] = useState<number>(0);

    function onSelectItem(id: number) {
        let item = categories.find((item)=> item.id == id);
        if(item) {
            setSelectedItem(item);
        }

        let index = categories.indexOf(item);
        setIndex(index);
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
    //     return <FlatList
    //     horizontal
    //     renderToHardwareTextureAndroid
    //     showsHorizontalScrollIndicator={false}
    //     scrollEventThrottle={16}
    //     data={categories} 
    //     renderItem={renderItem}
    //     //extraData={selectedItem} 
    //     //keyExtractor={item => `${item.id}`} 
    //     getItemLayout={getItemLayout}
    //     initialScrollIndex={selectedItem.id-1}
    // />
        return <HorizontalList 
            snapToInterval={100}
            data={categories} 
            // @ts-ignore
            renderItem={renderItem}
            getItemLayout={getItemLayout}
            initialScrollIndex={index} />
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