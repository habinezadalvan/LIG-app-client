import React from "react";
import { Caption, Avatar, Title } from "react-native-paper";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {useTheme} from 'react-native-paper';

export default function MemberCard({ onPress, position, firstname, lastname, accountStatus }) {

  const { colors, dark } = useTheme();

  
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ alignSelf: "center", width:'90%' , backgroundColor: dark ? colors.black :  '#fff', marginVertical: 2, padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar.Image size={50} source={require("../assets/logoBlue.png")} />
          <View style={{ marginLeft: 15, flexDirection: "column" }}>
        <Title style={styles.title}>{`${firstname} ${lastname}`}</Title>
            <View style={styles.captionContainer}>
              <Caption >{position}</Caption>
              {accountStatus === 'disactivated' ?  <Feather name="star" size={20} color="#444" /> :  <Feather name="star" size={20} color="#0793FD" />}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 3,
    width: '68%',
  },
  captionContainer: {
    flexDirection: "row",
    width: '70%',
    justifyContent: "space-between",
  },
});
