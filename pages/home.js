import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../globalstyles/global";

export default function Home () {
    return (
        <View style={globalStyles.maincontainer}>
            <Text style={globalStyles.titletext}>Home Screen</Text>
        </View>
    )
}


