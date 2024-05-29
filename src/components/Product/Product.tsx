import { FC, useReducer, useState } from "react"
import { Button, StyleSheet, TouchableOpacity } from "react-native"
import appTheme, { COLORS, SIZES } from "../../constants/themas"
import { View, Image, Text } from "react-native"
import ImageComponent from "../ImageComponent"
import { IProduct } from "./product.interface"

type ACTION_TYPE =
  | { type: 'increment', payload: number }
  | { type: 'decrement', payload: number }

const initialState = { count: 0 }
   
/**
     * Компонент навигатора, для перехода на страницу продукта
     */
//navigate: TypeNavigate

function reducer(state: typeof initialState, action: ACTION_TYPE) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.payload }
      case 'decrement':
        return { count: state.count - action.payload  }
      default:
        throw new Error()
    }
  }

/**
 * Продуктовая иконка
 * @param param0 
 * @returns 
 */
const Product: FC<IProduct> = props => {
    const [isCart, setCart] = useState(false)
    const [state, dispatch] = useReducer(reducer, {count: props.minCount})
    return (<>
        <View
         style={{
                padding: SIZES.padding,
                width: 180,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                flexDirection:"column",
                justifyContent: "space-between",
                marginTop: SIZES.margin,
                marginRight:SIZES.margin
        }}
        >
            <ImageComponent iconName={props.iconName} selected={false} size={40}></ImageComponent>
             <View style={{...styles.view}}>
                <Text style={{...styles.text}}>{props.priceMin}-{props.priceMax} р.</Text>
                <Text style={{...styles.text}}>{props.unitOfMeasurement}</Text>
            </View>
            <View style={{...styles.view}}>
                <Text style={{...styles.text}}>{props.name}</Text>
            </View>
            <View style={{...styles.marginTop}}>
                {!isCart ? (
                    <Button 
                     color={appTheme.COLORS.primary}
                     title="В корзину" onPress={() => setCart(true) }/>
                ):
                (
                    <View style={{...styles.viewCart}}>
                        <Button 
                        color={appTheme.COLORS.primary}
                        title="-" onPress={() => {
                            
                            if(state.count== props.minCount) {
                                return;
                            }     

                            dispatch({ type: 'decrement', payload: props.step})
                        }}/>
                        <Text style={{...styles.text}}>{state.count}</Text>
                        <Button 
                        color={appTheme.COLORS.primary}
                        title="+" onPress={() => dispatch({ type: 'increment', payload: props.step })}/>
                    </View>
                )}
            </View>
        </View>
    </>)
}


const styles = StyleSheet.create({
    viewCart:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor: appTheme.COLORS.lightGray,
    },
	view: {
        flexDirection:"column",
		marginTop: SIZES.margin,
        borderRadius:SIZES.radius,
        backgroundColor: COLORS.lightGray,
        alignItems: "center",
        justifyContent: "space-between",
	},
     text: {
        fontWeight:'bold',
        //justifyContent:"center"
     },
     marginTop: {
        marginTop: SIZES.margin
     }
  })

export default Product