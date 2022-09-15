import { useEffect, useState } from "react";
import { FlatList, View, Text, SafeAreaView } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const DATA = [
  {
    id: 1,
    nama: "Budi",
  },
  {
    id: 2,
    nama: "Santi",
  },
  {
    id: 3,
    nama: "Harun",
  },
];

const Item = (props) => {
  return (
    <Card>
      <Card.Cover source={{ uri: props.item.avatar }} />
      <Card.Content>
        <Title>{props.item.first_name}</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

const Separator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "skyblue",
      }}
    ></View>
  );
};

export default function MyList() {
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json.data);
      });
  }, []);

  return (
    <View style={{ margin: 40 }}>
      <FlatList
        data={users}
        renderItem={Item}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}
