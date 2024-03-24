import React, { FC, useEffect, useState } from "react";
import { useNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { userRoutes } from "./user.routes";
import BottomMenu from "../components/bottom-menu/BottomMenu";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Alert } from "react-native";
import ShoppingBacket from "../components/ShoppingBacket/ShoppingBacket";


const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
    const navRef = useNavigationContainerRef()
    const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)

    

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name)

        const listen = navRef.addListener('state', ()   => {
            setCurrentRoute(navRef.getCurrentRoute()?.name)
        })

        return () => {
            navRef.removeListener('state', listen);
        }

    }, [])

    return (
        <>
        <NavigationContainer ref={navRef}>
            <Stack.Navigator screenOptions={{headerShown: false, }} initialRouteName="Home">
                {userRoutes.map(route => (
                    <Stack.Screen key={route.name} {...route}  /> 
                ))} 

            </Stack.Navigator>
        </NavigationContainer>
        <BottomMenu navigate={navRef.navigate} currentRoute={currentRoute}></BottomMenu>
        <ShoppingBacket min={0} max={0}></ShoppingBacket>
        </>
        
    )
}

export default Navigation;