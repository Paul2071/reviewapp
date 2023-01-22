import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../globalstyles/global";
import MainCard from "../components/mainCard";

export default function ReviewDetails ({route, navigation} ) {

const {title, body, rating} = route.params

    return (
        <View style={globalStyles.maincontainer}>
       
        <MainCard >
            <Text style={globalStyles.titletext}>{ title }</Text>
        
            <Text>{ body }</Text>
        
            <Text>{ rating }</Text>
        </MainCard>
          
            <Button 
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
      />
        </View>
    )
}


