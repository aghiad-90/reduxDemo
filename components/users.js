import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import User from "./user";

export default function Users() {
  const [users, setUsers] = React.useState([]);

  const GetUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => {
        setUsers(data);
      });
  };
  useEffect(() => {
    GetUser();
  });

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(user) => user["id"].toString()}
        data={users}
        renderItem={({ item, index }) => <User name={item.name} key={index} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
