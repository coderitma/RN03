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
import FormLogin from "./FormLogin";
import MyList from "./MyList";

export default function App() {
  const [user, setUser] = useState({});

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  };

  useEffect(getData, []);

  return <MyList />;
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
