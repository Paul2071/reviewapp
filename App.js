import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import Home from "./pages/home";
import ReviewDetails from "./pages/reviewDetails";
import Loading from "./pages/loading";

export default function App() {
  const [loaded] = useFonts({
    rubik: require("./assets/fonts/Rubik-Regular.ttf"),
    rubiksemibold: require ("./assets/fonts/Rubik-SemiBold.ttf")
  })
  
  if (!loaded) {
    return <Loading/>;
  } else {
    return <Home /> ;
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
