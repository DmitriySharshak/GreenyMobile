import React from "react";
import { View, Text } from "react-native";
import  app  from '../../app.json';
import { COLORS, FONTS } from "../constants";



function Version() {
    return <View style={{
            justifyContent: "center", 
            alignContent: "center" }}>
        <Text style={{ color: COLORS.black, ...FONTS.h6}}>Версия {app.version}</Text>
        <Text style={{ color: COLORS.black, ...FONTS.h6 }}>Дата выпуска версия {app.versionData}</Text>
    </View>;
}


export default Version;