import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../globalstyles/global";

export default function Home ( {navigation}) {
    return (
        <View style={globalStyles.maincontainer}>
            <Text style={globalStyles.titletext}>Home Screen</Text>
            <Button 
            title="Go to Review"
            onPress={() => navigation.navigate("Review")}
      />
            <Button 
            title="Go to About"
            onPress={() => navigation.navigate("About")}
      />
        </View>
    )
}


