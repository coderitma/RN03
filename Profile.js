import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Appbar, Avatar } from "react-native-paper";

export default function Profile(props) {
  const [user, setUser] = useState(props.route.params.oncom);
  return (
    <Appbar.Header>
      <Avatar.Image size={50} source={{ uri: user.avatar }} />
      <Appbar.Content title={user.first_name} subtitle={user.email} />
    </Appbar.Header>
  );
  // return <Text>{JSON.stringify(props.route.params.oncom)}</Text>;
}
