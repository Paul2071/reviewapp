import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../globalstyles/global";

export default function ReviewDetails ({navigation} ) {
    return (
        <View style={globalStyles.maincontainer}>
            <Text style={globalStyles.titletext}>Review Details Screen</Text>
            <Button 
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
      />
        </View>
    )
}


