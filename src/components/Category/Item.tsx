import { FC } from "react";
import ImageComponent from "../ImageComponent";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import appTheme from "../../constants/themas";

interface IItemProps {
	id: number
    name: string
    imageBase64: string
	selected: boolean 
    onSelected: (id: number) => void
}

const Item: FC<IItemProps>= ({id, name, imageBase64, selected, onSelected}) => {
    
    return <TouchableOpacity style={[styles.container, selected && styles.container_selected]} onPress={() => onSelected(id)}>
            <Image 
                source={{uri:'data:image/png;base64,'+imageBase64}}
                resizeMode="contain"
                style={{
                    width: 40,
                    height: 40 }} />

            <Text style={styles.container__text}>{name}</Text>          
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    container:{
        padding: 4,
        backgroundColor: "#E2EBE1",
        borderWidth: 1,
        borderRadius: appTheme.SIZES.radius,
        alignItems: "center",
    },
    container_selected:{
        backgroundColor: "#4CFA45",
    },
    container__text:{
        color: appTheme.COLORS.black,
        fontSize: appTheme.SIZES.base
    }

  })

export default Item;