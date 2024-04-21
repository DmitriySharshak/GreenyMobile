import React, { FC, useEffect, useState } from "react";
import { useNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { userRoutes } from "./user.routes";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import { useAuth } from "../hooks/useAuth";
import { adminRoutes } from "./admin.routes";
import Auth from "../screens/Login";
import { Alert } from "react-native";
import Register from "../screens/Register";
import { useCheckAuth } from "../providers/useCheckAuth";
import Login from "../screens/Login";


const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
    const { user } = useAuth()

    const navRef = useNavigationContainerRef()
    const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)
    
    const routes = [...userRoutes, ...adminRoutes]

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name)

        const listen = navRef.addListener('state', ()   => {
            setCurrentRoute(navRef.getCurrentRoute()?.name)
        })

        return () => {
            navRef.removeListener('state', listen);
        }
    }, [])

    useCheckAuth(currentRoute)
    
    return (
        <>
        <NavigationContainer ref={navRef}>
            <Stack.Navigator screenOptions={{headerShown: false }} initialRouteName={user ? "TeamWork": "Login"}>

            {user ? (
				user.isAdmin ? (
					routes.map(route => <Stack.Screen key={route.name} {...route} />)
				) : (
					userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
				)
			) : (
                <>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                </>
			)}
            </Stack.Navigator>
        </NavigationContainer>

        {user && currentRoute ? 
            (<BottomMenu navigate={navRef.navigate} currentRoute={currentRoute}></BottomMenu>)
            :
            (<></>)
        }
        </>
        //<ShoppingBacket min={0} max={0}></ShoppingBacket>
    )
}

export default Navigation;