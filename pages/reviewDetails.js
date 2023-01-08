import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../globalstyles/global";

export default function ReviewDetails ({route, navigation} ) {

const {title, body, rating} = route.params

    return (
        <View style={globalStyles.maincontainer}>
            <Text>{ title }</Text>
            <Text>{ body }</Text>
            <Text>{ rating }</Text>
            <Button 
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
      />
        </View>
    )
}


