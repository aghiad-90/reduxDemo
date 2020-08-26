import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import getUser from "./../services/userService";

export default function users() {
  useEffect(() => {
    getUser();
  });

  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
