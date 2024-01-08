
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import appTheme from "../../constants/themas"
import Header from "../../components/Header"
import Categories from "../../components/Categories"
import { useNavigation } from "@react-navigation/native"
import { useTypedNavigation } from "../../hooks/useTypedNavigation"


const Home = ({}) =>{
    const {navigate} = useTypedNavigation()

    return (
            <View style={{ paddingLeft: appTheme.SIZES.padding, paddingRight: appTheme.SIZES.padding  }}>
             <Pressable onPress={()=> navigate('Auth')}>
                <Text style={{color:'white'}}>Go to login</Text>
             </Pressable>
             {Categories()}
             
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         backgroundColor: appTheme.COLORS.lightGray4
    },
    
})

export default Home;