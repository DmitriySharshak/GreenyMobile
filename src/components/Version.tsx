import React from "react";
import { View, Text } from "react-native";
import appTheme from "../constants/themas";
import  app  from '../../app.json';



function Version() {
    return <View style={{ marginBottom: 30, justifyContent: "center", alignContent: "center" }}>
        <Text style={{ color: appTheme.COLORS.darkgray, fontSize: 10 }}>Версия {app.version}</Text>
        <Text style={{ color: appTheme.COLORS.darkgray, fontSize: 10 }}>Дата выпуска версия {app.versionData}</Text>
    </View>;
}


export default Version;