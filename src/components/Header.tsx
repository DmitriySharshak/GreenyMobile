import React from "react";
import { View, Image, TouchableHighlight, StyleSheet, Text, Alert, TextInput } from "react-native";
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
    width:330
  },

  input: {
    height: 35,
    width: '100%',
    borderWidth: 1,
    padding: 10,
  },
})

const Header = () => {
    function onChangeFilter(text: string) {
        
    }

    return <View style={styles.header}>
             <TouchableHighlight>
                <Image source={icons.menu} style={{width:30, height:30}}/>
             </TouchableHighlight>
            <View style={styles.header_left}>
            </View>
           </View>
}


export default Header;