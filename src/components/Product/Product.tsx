import { FC, useReducer, useState } from "react"
import { Button, StyleSheet, TouchableOpacity } from "react-native"
import appTheme from "../../constants/themas"
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
                padding: appTheme.SIZES.padding,
                width: 180,
                backgroundColor: appTheme.COLORS.white,
                borderRadius: appTheme.SIZES.radius,
                flexDirection:"column",
                justifyContent: "space-between",
                marginTop: appTheme.SIZES.margin,
                marginRight:appTheme.SIZES.margin
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
                    <Button title="В корзину" onPress={() => setCart(true) }/>
                ):
                (
                    <View style={{...styles.viewCart}}>
                        <Button title="-" onPress={() => {
                            
                            if(state.count== props.minCount) {
                                return;
                            }     

                            dispatch({ type: 'decrement', payload: props.step})
                        }}/>
                        <Text style={{...styles.text}}>{state.count}</Text>
                        <Button title="+" onPress={() => dispatch({ type: 'increment', payload: props.step })}/>
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
		marginTop: appTheme.SIZES.margin,
        borderRadius:appTheme.SIZES.radius,
        backgroundColor: appTheme.COLORS.lightGray,
        alignItems: "center",
        justifyContent: "space-between",
	},
     text: {
        fontWeight:'bold',
        //justifyContent:"center"
     },
     marginTop: {
        marginTop: appTheme.SIZES.margin
     }
  })

export default Product