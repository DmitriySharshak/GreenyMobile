import { FC, useCallback, useEffect, useRef, useState } from "react"
import { Image, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import images from "../../constants/images";
import {IconTextButton, TextButton, AuthModal, Version} from "../../components/"
import { icons } from "../../constants";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import {MotiView, useAnimationState} from "moti"
const Welcome = () => {


    const [selectedScreen, setSelectedScreen] = useState("")
    //Bottom Modal

    const bottomSheetModalRef = useRef<BottomSheetModalMethods>(null)

    // Bottom Modal Callbacks
    const showModal = useCallback((screen:string)=>{
        setSelectedScreen(screen);
        bottomSheetModalRef.current.present()
    }, [])

    const hideModal = useCallback((screen:string)=>{
        scaleAnimationState.transitionTo('normal')
        bottomSheetModalRef.current.dismiss()
    }, [])

    // Moti
    const scaleAnimationState = useAnimationState({
        normal:{
            transform:[{scale:1}],
            
        },
        scaleDown:{
            transform:[{scale:0.9}],
            borderRadius:20
        }
    })

    useEffect(() => {
       scaleAnimationState.transitionTo('normal')
    }, []);

    // Render
    
    function renderHeaderImage() {
        return (
            <View>
                <Image
                source={images.panirama}
                style={{
                    width: SIZES.width,
                    height:210
                }}
                />
            </View>
        )
    }

    function renderLoginDetails(){
        return (
            <View style={{
                flex:1,
                padding: SIZES.padding,
                justifyContent:"space-between"
            }}>
                <View>
                    <Text 
                    style={{
                        ...FONTS.h2,
                        color: COLORS.black
                    }}
                    >
                        Добро пожаловать
                    </Text>

                    <Text 
                    style={{
                        
                        ...FONTS.h6,
                        color: COLORS.black
                    }}
                    >
                        Пожалуйста, выберите способ входа 
                    </Text>
                </View>

                {/** Login Buttons */}
                <View>
                    <IconTextButton 
                        icon={icons.phone}
                        label="Продолжить с номером телефона"
                        containerStyle={{
                            borderColor:COLORS.primary,
                            backgroundColor:COLORS.primary,
                        }}
                        onPress={()=>{
                            setTimeout(()=>{
                                scaleAnimationState.transitionTo('scaleDown')
                            }, 100)

                            showModal("login")
                        }}
                    />

                    <IconTextButton 
                        icon={icons.google}
                        label="Продолжить c Google"
                        containerStyle={{
                            marginTop: SIZES.margin,
                            borderColor:COLORS.lightGray,
                            backgroundColor:COLORS.lightGray,
                        }}
                        onPress={()=>{}}
                    />
                </View>

                { /** Sign Up */}
                <View>
                    <Text style={{
                        ...FONTS.h4,
                        textAlign:"center",
                        color: COLORS.black
                    }}>
                        У Вас нет аккаунта?
                    </Text>
                    <TextButton
                        label="Создать аккаунт"
                        containerStyle={{
                            borderColor:COLORS.primary,
                            backgroundColor:COLORS.primary,
                            marginTop:SIZES.margin,
                        }}
                        labelStyle={{
                            color: COLORS.white
                        }}
                        onPress={()=>{
                            //showModal("Register")
                        }}
                    />
                </View>

                { /** Version */}
                <View style={{
                    alignItems:"center"
                }}>
                    <Version></Version>
                </View>        
                
            </View>
        )
    }

    // const [counter, setCounter] = useState(0);
    // const [counterTwo, setCounterTwo] = useState(0);

    // const updateOne = () => {
    //     console.log(
    //       "Я не мемоизирован"
    //     );
    //   };
    
    //   const updateTwo = useCallback(() => {
    //     console.log(
    //       "Я мемоизирован!"
    //    );
    //   }, [counter]);

    // useEffect(() => {
    //     updateOne();
    //   }, [updateOne]);
    
    //   useEffect(() => {
    //     updateTwo();
    //   }, [updateTwo]);

    return (
        <View style={{
                flex:1,
                backgroundColor: COLORS.white
                }}
        >
            <MotiView 
                state={scaleAnimationState}
                style={{
                flex:2,
                overflow:"hidden",
                backgroundColor: COLORS.backgroundPrimary
            }}>                
                {renderHeaderImage()}
                {renderLoginDetails()}

                {/**Modal */}
                <AuthModal
                    bottomSheetModalRef={bottomSheetModalRef}
                    hideModal={hideModal}
                    selectedScreen={selectedScreen}
                    setSelectedScreen={setSelectedScreen}
                />
            </MotiView>

        </View>
    )
}   

export default Welcome;