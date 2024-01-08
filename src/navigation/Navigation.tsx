import React, { FC, useEffect, useState } from "react";
import { useNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { userRoutes } from "./user.routes";
import BottomMenu from "../components/bottom-menu/BottomMenu";


const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
    //const {user} = useAuth()
    const [currentRoute, setCurrentRoute] = useState<string|undefined>(undefined)

    const navRef = useNavigationContainerRef()

    // useEffect(() => {
    //     setCurrentRoute(navRef.getCurrentRoute()?.name)

    //     const listen = navRef.addListener('state', ()   => 
    //         setCurrentRoute(navRef.getCurrentRoute()?.name)
    //     )

    //     return () => {
    //         navRef.removeListener('state', listen);
    //     }

    // }, [])

    return (
        <>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                contentStyle: {
                    //backgroundColor:"#090909"
                },
                
                }}
                initialRouteName={'Home'}        
            >
                {userRoutes.map(route => (
                    <Stack.Screen key={route.name} {...route}  /> 
                ))}
            </Stack.Navigator>
        </NavigationContainer>
        <BottomMenu nav={navRef.navigate} currentRoute="{currentRoute}" ></BottomMenu>
        </>
        
    )
}

export default Navigation;