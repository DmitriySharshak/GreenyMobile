import React, {useState} from "react";
import { Image, Text, View, FlatList, TouchableOpacity, Alert, } from "react-native";
import appTheme from "../../constants/themas";
import { categoryItems } from "./category.data";
import { ICategoryItem } from "./category.interface";
import themas from "../../constants/themas";

const Categories = () => {
    const [categories, setCategories] = useState(categoryItems);
    const [selectedItem, setSelectedItem] = useState<ICategoryItem | null>(null);

    function onSelectItem(category: ICategoryItem) {
        setSelectedItem(category)
    }
    
    function getCategoryNameById(id: number) {
        let category = categories.filter(a => a.id == id)    
        
        if (category.length > 0)
            return category[0].name
        
        return ""
    }

    const renderItem = ({ item}: {item: ICategoryItem}) => {
        return <TouchableOpacity
        style={{
            padding: 8,
            //margin: appTheme.SIZES.padding,
            backgroundColor: (selectedItem?.id == item.id) ? appTheme.COLORS.primary : appTheme.COLORS.white,
            borderRadius: appTheme.SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: appTheme.SIZES.padding,
            marginTop: appTheme.SIZES.padding,
        }}
        onPress={() => onSelectItem(item)}
    >

    <View  
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: (selectedItem?.id == item.id) ? appTheme.COLORS.white : appTheme.COLORS.lightGray
            }}
        >
            <Image 
                source={item.iconName}
                resizeMode="contain"
                style={{
                    width: 35,
                    height: 35
                }} />
        </View>

        <Text
            style={{ color: (selectedItem?.id == item.id) ? appTheme.COLORS.white : appTheme.COLORS.black, ...appTheme.FONTS.body4}}>
            {item.name}
        </Text>
        
</TouchableOpacity>
    }
    
    return (
            <View>
                <View>
                    <Text style={{fontSize: themas.SIZES.h2}}>Категории</Text>
                </View>
                <FlatList
                    data={categories}
                    horizontal = {false}
                    numColumns={4}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>           
    )
}

// const styles = StyleSheet.create({
//     shadow: {
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 1,
//     }
// })

export default Categories 