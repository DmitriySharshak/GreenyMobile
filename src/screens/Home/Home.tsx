
import React from "react"
import {View } from "react-native"
import appTheme from "../../constants/themas"
import Header from "../../components/Header"
import Categories from "../../components/Categories/Categories"

const Home = ({}) => {
    return (
            <View style={{ 
                paddingLeft: appTheme.SIZES.padding, 
                paddingRight: appTheme.SIZES.padding  
            }}>
             {Header()}
             {Categories()}
            </View>
    )
}


export default Home;