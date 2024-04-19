import { FC } from "react"
import { Image, ScrollView, StatusBar, Text, View } from "react-native"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import { Button } from "react-native"
import { useAuth } from "../hooks/useAuth"
import { deleteUser } from "../store/auth.store"

const Profile:  FC = () => {
    const { setUser } = useAuth()
    const { navigate } = useTypedNavigation()
    return (
         <View>
            <Text>Профиль</Text>
            <StatusBar></StatusBar>

            <Button
                title="Go to home"
                onPress={() =>
                    navigate('Home')}/>
                <Button
                title="Logout"
                onPress={() =>
                    {
                    setUser(null)
                    deleteUser();
                    }}/>
         </View>
    )
}

export default Profile;