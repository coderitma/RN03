import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (email) => setEmail(email);
  const handlePassword = (password) => setPassword(password);
  const login = () => {
    // console.log({ username: email, password });
    // TODO: how to save token after i get this end point
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ username: email, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => alert(json.token));
  };

  return (
    <View style={styles.container}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        editable
        maxLength={40}
        onChangeText={handleEmail}
        style={styles.input}
        keyboardType="email-address"
        placeholder="email"
      />
      <Text style={{ marginLeft: 10 }}>{email}</Text>
      <TextInput
        onChangeText={handlePassword}
        style={styles.input}
        placeholder="password"
        keyboardType="default"
        // secureTextEntry={true}
      />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.textBtn}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  input: {
    borderColor: "red",
    borderBottomWidth: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: "100%",
  },
  button: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "red",
    width: "100%",
  },
  textBtn: {
    textAlign: "center",
    color: "white",
    fontSize: 25,
  },
});
