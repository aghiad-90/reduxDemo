import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function user({ name }) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: "red",
    marginVertical: 5,
  },
});
