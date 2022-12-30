import { StyleSheet, View, Text } from "react-native";

export default function About ( ) {
    return (
        <View style={styles.maincontainer}>
            <Text>About Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    maincontainer: {
        padding: 24,
    }
});