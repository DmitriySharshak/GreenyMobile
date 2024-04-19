import { FC } from "react"
import { Text, View } from "react-native"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import { Button } from "react-native"

const Product:  FC = () => {
    const { navigate } = useTypedNavigation()
    return (
         <View>
            <Text>Страница просмотра продукта</Text>
            <Button
                title="Go to home"
                onPress={() =>
                    navigate('Home')}/>
         </View>
    )
}

export default Product;