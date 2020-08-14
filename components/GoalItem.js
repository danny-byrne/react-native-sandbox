import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableHighlight activeOpacity={0.8} onPress={props.onDelete}>
      <View key={Date.now().toString()} style={styles.listItem}>
        <Text>{props.title} </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;
