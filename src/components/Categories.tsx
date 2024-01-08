import React, {useState} from "react";
import { Image, Text, TouchableHighlight, View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import appTheme from "../constants/themas";
import images from "../constants/images";
import Item from "./CategoryItem";
import MyItem from "./CategoryItem";
import Category from "./CategoryItem";
import { CategoryData } from "../types/categoryData.types";
import CategoryItem from "./CategoryItem";


const categoryList:Array<CategoryData> = [
    {   id: 1, 
        name:'Мясо', 
        image: images.meat
    },
    {   id: 2, 
        name:'Молоко +', 
        image: images.cheese
    },
    {   id: 3, 
        name:'Птица', 
        image: images.chicken
    },
    {   id: 4, 
        name:'Яйцо', 
        image: images.eggs
    },
    { 
        id: 5, 
        name:'Овощи', 
        image: images.vegetables
    },  
    {   id: 6, 
        name:'Фрукты', 
        image: images.fruits
    },
    {   id: 7, 
        name:'Ягоды', 
        image: images.berries
    },
    {   id: 8, 
        name:'Грибы', 
        image: images.mushroom
    },
    {   id: 9, 
        name:'Мед +', 
        image: images.honey
    },
    {   id: 10, 
        name:'Масла', 
        image: images.oil
    },
]; 


const Categories = () => {
    const [categories, setCategories] = useState(categoryList);
    const [selectedCategory, setSelectedCategory] = useState<CategoryData | null>(null);
   
    function onSelectCategory(category: CategoryData) {
        setSelectedCategory(category)
    }
    
    function getCategoryNameById(id: number) {
        let category = categories.filter(a => a.id == id)
    
        if (category.length > 0)
            return category[0].name
    
        return ""
    }

    const renderItem = ({ item}: {item: CategoryData}) => {
        return (
            <CategoryItem item={item}></CategoryItem>
        );
    }
    
    return (
            <View>
                <View>
                    <Text>Категории</Text>
                </View>
                <FlatList
                    data={categories}
                    horizontal = {false}
                    numColumns={3}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: appTheme.SIZES.padding * 2 }}
                />
            </View>           
    )
}

export default Categories 