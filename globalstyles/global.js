import {StyleSheet} from 'react-native'

export const  globalStyles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        padding: 20,
    },
    titletext: {
        fontFamily: "rubik",
        fontSize: 24,
        color: 'black'
    },
    paragraphText: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

export const images = {
    ratings: {
        "1": require("../assets/images/rating-1.png"),
        "2": require("../assets/images/rating-2.png"),
        "3": require("../assets/images/rating-3.png"),
        "4": require("../assets/images/rating-4.png"),
        "5": require("../assets/images/rating-5.png"),
    }
}