import React, { FC, useEffect, useState } from "react";
import { useNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { userRoutes } from "./user.routes";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import { useAuth } from "../hooks/useAuth";
import { adminRoutes } from "./admin.routes";
import Register from "../screens/Auth/Register";
import { useCheckAuth } from "../providers/useCheckAuth";
import { Login, Onboarding, Welcome } from "../screens";
import TeamWork from "../screens/Teamwork";

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
                    <Stack.Navigator screenOptions={{headerShown: false }} initialRouteName={user ? "TeamWork": "Welcome"}>

                    {user ? (
                        user.isAdmin ? (
                            routes.map(route => <Stack.Screen key={route.name} {...route} />)
                        ) : (
                            userRoutes.map(route => <Stack.Screen key={route.name} {...route} />)
                        )
                    ) : (
                        /** Auth */
                        <>
                            <Stack.Screen name='TeamWork' component={TeamWork} /> 
                            <Stack.Screen name='Welcome' component={Welcome} /> 
                            <Stack.Screen name='Login' component={Login} />
                            <Stack.Screen name='Register' component={Register} />
                            <Stack.Screen name='Onboarding' component={Onboarding} /> 
                            
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