import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/home";
import ReviewDetails from "./pages/reviewDetails";
import Loading from "./pages/loading";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(
    () => {
      const getFonts = async () => {
        return   {
          "rubik-regular": require("./assets/fonts/Rubik-Regular.ttf"),
          "rubik-semibold": require("./assets/fonts/Rubik-SemiBold.ttf"),
        };
      };
      setFontsLoaded(true);
      getFonts()
    },
    []
  );


  if (fontsLoaded) {
    return <Home />;
  } else {
    return <Loading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
