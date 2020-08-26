import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Users from "./components/users";

export default function App() {
  return (
    <View style={styles.container}>
      <Users />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
