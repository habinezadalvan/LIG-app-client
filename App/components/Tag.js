import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Tag({ color, text, textColor }) {
  const tag = (
    <View style={[styles.container, { backgroundColor: color, width: "100%" }]}>
      <Text style={{ color: textColor, fontWeight: "bold", fontSize: 16 }}>
        {text}
      </Text>
    </View>
  );
  return (
    <View style={{ width: "45%" }}>
      <TouchableOpacity>{tag}</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
    borderRadius: 5,
  },
});
