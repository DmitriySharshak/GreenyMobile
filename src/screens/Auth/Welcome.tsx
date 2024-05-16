import { FC } from "react"
import { Image, Text, View } from "react-native";
import appTheme from "../../constants/themas";
import images from "../../constants/images";
import {IconTextButton, TextButton} from "../../components/"
import { icons } from "../../constants";


const Welcome = () => {

    // Render
    
    function renderHeaderImage() {
        return (
            <View>
                <Image
                source={images.panirama}
                style={{
                    width: appTheme.SIZES.width,
                    height:220
                }}
                />
            </View>
        )
    }

    function renderLoginDetails(){
        return (
            <View style={{
                flex:1,
                padding: appTheme.SIZES.padding,
                justifyContent:"space-between"
            }}>
                {/** Title and description */}
                <View>
                    <Text 
                    style={{
                        ...appTheme.FONTS.h2,
                        color: appTheme.COLORS.lightGray
                    }}
                    >
                        Авторизация
                    </Text>

                    <Text 
                    style={{
                        ...appTheme.FONTS.h4,
                        color: appTheme.COLORS.lightGray
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
                            borderColor:appTheme.COLORS.primary,
                            backgroundColor:appTheme.COLORS.primary,
                        }}
                        onPress={()=>{}}
                    />

                    <IconTextButton 
                        icon={icons.google}
                        label="Продолжить с Google"
                        containerStyle={{
                            marginTop:appTheme.SIZES.margin,
                        }}
                        onPress={()=>{}}
                    />

                    <IconTextButton 
                        icon={icons.telegram}
                        label="Продолжить с Telegram"
                        containerStyle={{
                            marginTop:appTheme.SIZES.margin,
                        }}
                        onPress={()=>{}}
                    />

                    <IconTextButton 
                        icon={icons.facebook}
                        label="Продолжить с Facebook"
                        containerStyle={{
                            marginTop:appTheme.SIZES.margin,
                        }}
                        onPress={()=>{}}
                    />
                </View>

                { /** Sign Up */}
                <View>
                    <Text style={{
                        ...appTheme.FONTS.h4,
                        textAlign:"center",
                        color: appTheme.COLORS.lightGray
                    }}>
                        У Вас нет аккаунта?
                    </Text>
                    <TextButton
                        label="Создать аккаунт"
                        containerStyle={{
                            borderColor:appTheme.COLORS.primary,
                            backgroundColor:appTheme.COLORS.primary,
                            marginTop:appTheme.SIZES.margin,
                        }}
                        onPress={()=>{}}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={{
                flex:1,
                backgroundColor: appTheme.COLORS.darkgray
                }}
        >
            <View style={{
                flex:1,
                overflow:"hidden",
                backgroundColor: appTheme.COLORS.black
            }}>                
                {renderHeaderImage()}
                {renderLoginDetails()}
            </View>

        </View>
    )
}   

export default Welcome;