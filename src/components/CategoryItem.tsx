import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import appTheme from "../constants/themas";
import { CategoryData } from "../types/categoryData.types";

const CategoryItem = ({item}: {item: CategoryData}) => {
    const [selectedItem, setSelectedItem] = useState<CategoryData | null>(null);

    function onSelectCategory(item: CategoryData) {
        setSelectedItem(item)
    }

    return <TouchableOpacity
                style={{
                    padding: appTheme.SIZES.padding,
                    margin: appTheme.SIZES.padding,
                    backgroundColor: (selectedItem?.id == item.id) ? appTheme.COLORS.primary : appTheme.COLORS.white,
                    borderRadius: appTheme.SIZES.radius,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: appTheme.SIZES.padding,
                }}
                onPress={() => onSelectCategory(item)}
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
                        source={item.image}
                        resizeMode="contain"
                        style={{
                            width: 35,
                            height: 35
                        }} />
                </View>
    
                <Text
                    style={{ color: (selectedItem?.id == item.id) ? appTheme.COLORS.white : appTheme.COLORS.black, 
                             ...appTheme.FONTS.body4
                    }}
                >
                    {item.name}
                </Text>
                
    </TouchableOpacity>
    
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

export default CategoryItem;