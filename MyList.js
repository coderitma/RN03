import { useEffect, useState } from "react";
import { FlatList, View, Text, SafeAreaView } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";
// todo: trouble fetch data using emulator like android nexus
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
    <Card style={{ flex: 1, margin: 2 }}>
      <Card.Cover source={{ uri: props.item.avatar }} />
      <Card.Content style={{ backgroundColor: "#e7e7e7" }}>
        <Title style={{ color: "#FF9900" }}>
          {props.item.first_name} {props.item.id}
        </Title>
        <Paragraph style={{ color: "#2DBFF8" }}>{props.item.email}</Paragraph>
      </Card.Content>
      <Card.Actions style={{ backgroundColor: "#e7e7e7" }}>
        <Button>
          <Text style={{ color: "#000" }}>Cancel</Text>
        </Button>
        <Button>
          <Text style={{ color: "#000" }}>OK</Text>
        </Button>
      </Card.Actions>
    </Card>
  );
};

const Separator = () => {
  return (
    <View
      style={{
        marginBottom: 10,
      }}
    ></View>
  );
};

export default function MyList() {
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({});
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        if (page > json.total_pages) {
          return;
        }
        setPage(page + 1);
        setUsers([...users, ...json.data]);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={Item}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
        onEndReached={getData}
      />
    </View>
  );
}
