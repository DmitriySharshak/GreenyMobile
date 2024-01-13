
import React from "react"
import {View } from "react-native"
import appTheme from "../../constants/themas"
import Header from "../../components/Header"
import CategoryList from "../../components/CategoryList"
import { Button } from "react-native"
import { useTypedNavigation } from "../../hooks/useTypedNavigation"

const Home = () => {
    const { navigate } = useTypedNavigation()
    
    return (
            <View style={{ 
                paddingLeft: appTheme.SIZES.padding, 
                paddingRight: appTheme.SIZES.padding  
            }}>
             {Header()}
             {CategoryList()}
             <Button
                title="Go to profile"
                onPress={() =>
                    navigate('Profile')}/>
            </View>
    )
}


export default Home;