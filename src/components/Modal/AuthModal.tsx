import React, { FC, useCallback, useMemo} from "react";
import {View, Platform, Text} from "react-native"
import {BottomSheetModal, BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import IconButton from "../IconButton";
import { Login } from "../../screens";
import { COLORS, SIZES, icons } from "../../constants";
import { useTypedNavigation } from "../../hooks/useTypedNavigation";
import TextButton from "../TextButton";
import {MotiView, useAnimationState} from "moti"
import Register from "../../screens/Auth/Register";

export interface IAuthModal {
    bottomSheetModalRef: any,
    hideModal: any,
    selectedScreen: string,
    setSelectedScreen: any
}

const AuthModal: FC<IAuthModal>=({bottomSheetModalRef, hideModal, selectedScreen, setSelectedScreen})=>{
    
    const navigation = useTypedNavigation();
    
    const snapPoints = useMemo(()=>{
        if(Platform.OS ==="ios"){
            //setNum(['93%', '93%'])
            return (['93%'])
        }else{
            //setNum(['60%', '60%'])
            return (['95%'])
        }
    },[])

    const renderBackdrop = useCallback((prop: BottomSheetDefaultBackdropProps)=> {
        return (
            <BottomSheetBackdrop
                {...prop}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                opacity={0.3}
                pressBehavior='none' 
            >
            </BottomSheetBackdrop>
        )
    }, [])

    function renderHeader(){
        return (
            <View>
                <View>
                    <IconButton
                        containerStyle={{
                            borderWidth: 0,
                            height:30,
                            justifyContent:"flex-start"
                        }}
                        iconStyle={{}}
                        icon={icons.angleArrowLeft}
                        onPress={()=> hideModal() }
                    />
                </View>
            </View>
        )
    }

    return (
    <BottomSheetModal 
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            index={0}
            backdropComponent={renderBackdrop}
            backgroundStyle={{
                borderRadius: 0,
                backgroundColor: "transparent"
            }}
            handleComponent={() => {
                return (
                    <View></View>
                );
            } }
            enablePanDownToClose={false}   
    >
        <View
            style={{
                flex:1,
                padding: SIZES.padding,
                borderTopLeftRadius: SIZES.radius * 2,
                borderTopRightRadius: SIZES.radius * 2,
                backgroundColor: COLORS.backgroundPrimary,
            }}
        >
            {renderHeader()}

            {/** Screens - Login, Signup, Forgot password */}
            <View 
             style={{
                flex: 1
             }}>
                
                {/** Login */}
                <MotiView 
                    style={{
                        position:'absolute',
                        top:0,
                        left:0,
                        right:0,
                        bottom: 0,
                        zIndex: selectedScreen === 'login' ? 2: 1
                    }}
                    animate={{
                        left: selectedScreen === 'login' ? 0: -100,
                        opacity: selectedScreen === 'login' ? 1: 0,
                    }}
                    transition={{
                        type:'timing',
                        duration:500
                    }}
                    >
                    <Login/>
                </MotiView>
                

                {/** Register */}
                {/* <MotiView 
                    style={{
                        position:'absolute',
                        top:0,
                        left:0,
                        right:0,
                        bottom: 0,
                        zIndex: selectedScreen === 'register' ? 2: 1
                    }}
                    animate={{
                        left: selectedScreen === 'register' ? 0: -100,
                        opacity: selectedScreen === 'register' ? 1: 0,
                    }}
                    transition={{
                        type:'timing',
                        duration:500
                    }}
                    >
                        <Register></Register>
                </MotiView> */}

                {/** Forgot Password */}
                
            </View>
            
        </View>
    </BottomSheetModal>
)
}

export default AuthModal
