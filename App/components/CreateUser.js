import React, {useState} from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import InputField from "./InputField";

export default function CreateUser() {

const [isFocused, setIsFocused] = useState(true);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <InputField placeholder="First name" />
        <InputField placeholder="Last name" />
        <InputField placeholder="Username" />
        <InputField placeholder="Email" />
        <InputField secureTextEntry={true} placeholder="Password" />

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 20

  },
  formContainer: {
      width: '80%',
      alignSelf: 'center',
      paddingVertical: 40,

  },
  textInputContainer: {
   marginBottom: 10
  },
  textInput: {
      padding: 5,
      borderWidth: .5,
      borderColor: '#e5e5e5',
      marginTop: 7,
      height: 40,
      borderRadius: 5,
      color: '#0793FD',
      fontSize: 18
  }
});

