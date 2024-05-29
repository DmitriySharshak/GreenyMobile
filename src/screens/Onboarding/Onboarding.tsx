import React, { FC, useRef, useState } from "react"
import { Text, View, FlatList } from "react-native";
import Button from "../../components/ui/button/Button";
import { useTypedNavigation } from "../../hooks/useTypedNavigation";
import { SIZES } from "../../constants";

const Onboarding = () => {

    //svg
    const controlX = SIZES.width / 2; //control center pointer`s x coordinate 
    const [isLastItem, setIsLastItem] = useState(false);

    const navigation = useTypedNavigation();
    
    const currentIndex = useRef(0)
    const screenFlatListRef = useRef<FlatList>()
    const titleFlatListRef = useRef<FlatList>()

    const onBoardingScreens = 2;

    const handleNextPress = () => {
        if(currentIndex.current < onBoardingScreens) {
            currentIndex.current +=1
            const nextIndex = currentIndex.current
            const offset = nextIndex * SIZES.width

            screenFlatListRef?.current?.scrollToOffset({
                offset,
                animated: true,
            })

            titleFlatListRef?.current?.scrollToOffset({
                offset,
                animated: true,
            })

            if(currentIndex.current ===onBoardingScreens){
                setIsLastItem(true)
            }
        } else {
            navigation.navigate("Welcome")
        }
    }
    
    return (
        <View>
            <Text>Onboarding</Text>
            <View>
                <Button onPress={handleNextPress}>{isLastItem? "Get started": "Next"}</Button>
            </View>
        </View>
    );
}   

export default Onboarding;