import { FC } from "react"
import { TouchableOpacity } from "react-native"
import appTheme from "../constants/themas"
import { View } from "react-native"
import { Image } from "react-native"
import { Text } from "react-native"
import { TypeNavigate } from "./bottom-menu/menu.interface"

interface ProductItemProps {
    iconName: any
    name: string
    priceMin: string
    priceMax: string
    navigate: TypeNavigate
}

const ProductItem: FC<ProductItemProps> = ({iconName, name, navigate}) => {
    return <>
    <TouchableOpacity
         style={{
         padding: 8,
         //backgroundColor: (selectedItem) ? appTheme.COLORS.primary : appTheme.COLORS.white,
         borderRadius: appTheme.SIZES.radius,
         alignItems: "center",
         justifyContent: "center",
         marginRight: appTheme.SIZES.padding,
         marginTop: appTheme.SIZES.padding,
     }}
     onPress={() => navigate("ProductScreen")}
     >
        <View  
         style={{
             width: 70,
             height: 70,
             borderRadius: 35,
             alignItems: "center",
             justifyContent: "center",
            // backgroundColor: (selectedItem) ? appTheme.COLORS.white : appTheme.COLORS.lightGray
         }}>
         <Image 
             source={iconName}
             resizeMode="contain"
             style={{
                 width: 35,
                 height: 35
             }} />
        </View>
    
        {/* <Text 
            style={{ color: (selectedItem) ? appTheme.COLORS.white : appTheme.COLORS.black, ...appTheme.FONTS.body4}}>
            {name}
        </Text> */}
     
     </TouchableOpacity>
 </>
}

export default ProductItem