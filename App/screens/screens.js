import React  from "react";

import { View, Text, StyleSheet } from "react-native";



export const ScreenContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};



export const Details = ({ route }) => {
  return (
    <ScreenContainer>
      <Text>Details page</Text>
      <Text>{route.params.name}</Text>
    </ScreenContainer>
  );
};


export const Splash = () => {
    return(
        <ScreenContainer>
            <Text>Loading...</Text>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "black",
  },
});
