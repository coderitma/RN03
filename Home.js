import { Button } from "react-native";

const Home = ({ navigation }) => {
  const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  };

  return (
    <Button
      title="Buka profile"
      onPress={() => navigation.navigate("About", { data })}
    />
  );
};

export default Home;
