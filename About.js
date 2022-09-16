import { useEffect, useState } from "react";
import { Text } from "react-native";

const About = ({ navigation, route }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (route.params.data.id) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${route.params.data.id}`
      )
        .then((response) => response.json())
        .then((json) => setUser(json));
    }
  }, []);

  return <Text>{user.username}</Text>;
};

export default About;
