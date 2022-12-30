import { StyleSheet, View, Text } from "react-native";

export default function Home ( ) {
    return (
        <View style={styles.maincontainer}>
            <Text>Home Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    maincontainer: {
        padding: 24,
    }
});