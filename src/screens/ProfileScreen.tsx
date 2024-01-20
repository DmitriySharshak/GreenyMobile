import { FC } from "react"
import { Text, View } from "react-native"
import { useTypedNavigation } from "../hooks/useTypedNavigation"
import { Button } from "react-native"

const ProfileScreen:  FC = () => {
    const { navigate } = useTypedNavigation()
    return (
         <View>
            <Text>Профиль</Text>
            <Button
                title="Go to home"
                onPress={() =>
                    navigate('Home')}/>
         </View>
    )
}

export default ProfileScreen;