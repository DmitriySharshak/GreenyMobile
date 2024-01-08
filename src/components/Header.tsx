import React from "react";
import { Linking, View, Button, Image, TouchableHighlight, StyleSheet, Text, Alert } from "react-native";
import icons from "../constants/icons";

const styles = StyleSheet.create({
  header: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
  },

  header_left :{
    flexDirection: "row",
    justifyContent: 'space-between',
    width:70
  }
})

const Header = () => {
    return <View style={styles.header}>
             <TouchableHighlight onPress={() => Alert.alert("Сайт")}>
                <Image source={icons.profile} style={{width:30, height:30}}/>
             </TouchableHighlight>
             <Text></Text>
            <View style={styles.header_left}>
            <TouchableHighlight onPress={() => Alert.alert("Корзина") }>
                <Image source={icons.shopingCart} style={{width:30, height:30}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Alert.alert("Корзина") }>
            <Image source={icons.bell} style={{ width: 30, height: 30,}} />
            </TouchableHighlight>   
                
                
            </View>
           </View>
}

export default Header;