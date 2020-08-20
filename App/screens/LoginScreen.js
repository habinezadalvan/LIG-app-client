import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  View,
  TextInput,
  Alert,
  StatusBar
} from "react-native";
import * as Animatable from "react-native-animatable";
import { CreateAuthContext } from "../context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import {useTheme} from 'react-native-paper';
import Database from '../fakedb/db';
import { color } from "react-native-reanimated";


export const SignIn = ({ navigation }) => {
  const { login } = useContext(CreateAuthContext);

  const {colors, dark} = useTheme();
  const [values, setValues] = useState({
    email: "",
    password: "",
    isvalidEmail: false,
    isSecureIntry: true,
    isValidUserEmail: true,
    isValidPassword: true
  });

  const handleChangeInput = (val) => {
    const emailReqex = /(\w+)@(\w+)\.(\w+)/gi;
    if(emailReqex.test(values.email)){
      setValues({
        ...values,
        email: val,
        isValidUserEmail: true,
        isvalidEmail: true
      });
    } else{
      setValues({
        ...values,
        email: val,
        isValidUserEmail: false,
        isvalidEmail: false
      });
    }
  };

  const handlePasswordChange = (val) => {
    if(val.length >= 8){
      setValues({
        ...values,
        password: val,
        isValidPassword: true
      });
    } else{ 
      setValues({
        ...values,
        password: val,
        isValidPassword: false
      });
    }
  };

  const handleSecurePassword = () => {
    setValues({ ...values, isSecureIntry: !values.isSecureIntry });
  };

  const handleValidUserEmail = (val) => {
    const emailReqex = /(\w+)@(\w+)\.(\w+)/gi;
    if(emailReqex.test(val)){
      setValues({
        ...values,
        isValidUserEmail: true
      })
    }else{
      setValues({
        ...values,
        isValidUserEmail: false
      })
    }
  }

  const handleLoginFun = (email, password) => {
    const findUser = Database.filter(user => {
      return email === user.email && password === user.password
    });
    if (email.length === 0 ) {
      Alert.alert('Invalid input!', 'Email input field can not be empty!', [{text: 'Okey'}]);
      return;
    }
    if (password.length === 0 ) {
      Alert.alert('Invalid input!', 'Password input field can not be empty!', [{text: 'Okey'}]);
      return;
    }
    if (findUser.length === 0 ) {
      Alert.alert('Invalid user!', 'Incorrect email or password!', [{text: 'Okey'}]);
      return;
    }
    login(findUser);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={dark ? 'dark-content' :  'light-content'}/>
      <View style={styles.upperSection}>
        <View style={styles.logoSubSection}>
          <View style={styles.logoSubSection}>
            <Animatable.View
              animation="pulse"
              duration={2000}
              style={[styles.logoContainer, {backgroundColor: colors.background}]}
            >
              <Animatable.Image
                animation="bounceIn"
                duration={2000}
                resizeMode="contain"
                source={require("../assets/small_logo.png")}
                style={styles.logo}
              />
            </Animatable.View>
          </View>
        </View>
        <View style={styles.formSubSection}>
          <View style={styles.loginFormContainer}>
            <Text style={[styles.text_header, {color: colors.background}]}>Sign in</Text>
            <View style={styles.inputFieldsContainer}>
              <View style={[styles.inputField, {backgroundColor: colors.background}]}>
                <FontAwesome
                  style={{ marginLeft: 7 }}
                  name="user-o"
                  color={colors.text}
                  size={20}
                />
                <TextInput
                  style={[styles.textInpunt, {color: colors.text}]}
                  placeholder="Email"
                  autoCapitalize="none"
                  onChangeText={(val) => handleChangeInput(val)}
                  placeholderTextColor="#666"
                  onEndEditing={(e) => handleValidUserEmail(e.nativeEvent.text)}
                />
                {values.isvalidEmail ? (
                  <Feather name="check-circle" color="green" size={20} />
                ) : (
                  <Feather name="check-circle" color={colors.text} size={20} />
                )}
              </View>
              {values.isValidUserEmail ? null : (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={[styles.validation, {color: colors.text}]}>Email must be in a valid format.</Text>
                </Animatable.View>
              )}
              <View style={[styles.inputField, {backgroundColor: colors.background}]}>
                <Feather
                  style={{ marginLeft: 7 }}
                  name="lock"
                  color={colors.text}
                  size={20}
                />
                <TextInput
                  style={[styles.textInpunt, {color: colors.text}]}
                  secureTextEntry={values.isSecureIntry}
                  placeholder="Password"
                  placeholderTextColor="#666"
                  autoCapitalize="none"
                  onChangeText={(val) => handlePasswordChange(val)}
                />
                {values.isSecureIntry ? (
                  <Feather
                    onPress={() => handleSecurePassword()}
                    name="eye"
                    color={colors.text}
                    size={20}
                  />
                ) : (
                  <Feather
                    onPress={() => handleSecurePassword()}
                    name="eye-off"
                    color={colors.text}
                    size={20}
                  />
                )}
              </View>
              {values.isValidPassword ? null:  (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={[styles.validation, {color: colors.text}]}>Password must be 8 characters long.</Text>
                </Animatable.View>
              ) }
            </View>
            <TouchableOpacity style={{ marginTop: 20 }}>
              <Text style={[{ color: "#eee", fontWeight: "bold" }, {color: colors.background}]}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleLoginFun(values.email, values.password)}
            >
              <View style={[styles.loginButton, { borderColor: colors.background}]}>
                <Text
                  style={[{ color: "white", fontWeight: "bold", fontSize: 18 }, {color: colors.background}]}
                >
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.lowerSection}>
        <Animatable.View
          animation="fadeInUpBig"
          delay={1800}
          style={[styles.big_bubble, {backgroundColor: colors.background}]}
        ></Animatable.View>
      </View>
    </View>
  );
};

const { height } = Dimensions.get("screen");

const logo_height = height * 0.1;

const logo_container_height = height * 0.13;
const big_bubble_height = height * 0.77;
const small_bubble_height = height * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0793FD",
  },
  upperSection: {
    flex: 4,
  },
  lowerSection: {
    flex: 1,
    backgroundColor: "#0793FD",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#eee",
  },
  logo: {
    height: logo_height,
    width: logo_height,
  },
  logoSubSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formSubSection: {
    flex: 2,
  },
  loginFormContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoContainer: {
    height: logo_container_height,
    width: logo_container_height,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#0570C1",
    shadowOpacity: 0.3,
    shadowColor: "#0570C1",
    shadowRadius: 10,
  },

  big_bubble: {
    height: big_bubble_height,
    width: big_bubble_height,
    backgroundColor: "#eee",
    borderRadius: 350,
    position: "absolute",
    right: -240,
    bottom: -350,
    zIndex: -1,
    shadowOpacity: 0.5,
    shadowColor: "#0570C1",
    shadowRadius: 5,
  },
  small_bubble: {
    height: small_bubble_height,
    width: small_bubble_height,
    backgroundColor: "#0570C1",
    borderRadius: 350,
    position: "absolute",
    left: -80,
    bottom: -200,
    zIndex: -2,
  },

  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },

  textInpunt: {
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    flexBasis: "82%",
  },

  inputFieldsContainer: {
    marginTop: 10,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 50,
    height: 45,
    marginTop: 30,
  },
  loginButton: {
    width: "100%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 5,
    backgroundColor: "#0793FD",
    borderColor: "white",
    borderWidth: 3,
    height: 45,
    marginTop: 30,
  },
  validation: {
    color: "white",
    paddingTop: 1,
  },
});
