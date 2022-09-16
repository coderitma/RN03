import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";

export default function Profile(props) {
  return <Text>{JSON.stringify(props.route.params.oncom)}</Text>;
}
