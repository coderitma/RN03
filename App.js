import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormLogin from "./FormLogin";
import MyList from "./MyList";
import RouterApp from "./RouterApp";

export default function App() {
  const [user, setUser] = useState({});

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  };

  useEffect(getData, []);

  return <RouterApp />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   // stretch: {
//   //   width: 100 / PixelRatio.getFontScale(),
//   // },
// });
