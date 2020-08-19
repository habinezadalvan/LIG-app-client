import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  Text
} from "react-native";
import CommonCustomButton from "../components/CommonCustomButton";
import * as Animatable from 'react-native-animatable';

export const WelcomePage = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0793FD" barStyle="light-content"/>
      <View style={styles.upperSection}>
        <View style={styles.logoSubSection}>
          <Animatable.View animation="pulse" duration={2000} style={styles.logoContainer}>
            <Animatable.Image
              animation="bounceIn"
              duration={2000}
              resizeMode="contain"
              source={require("../assets/small_logo.png")}
              style={styles.logo}
            />
          </Animatable.View>
        </View>
        <View style={styles.welcomeSubSection}>
          <Text  style={styles.paragraph}>
            Save and Grow everyday with L.I.G app!
          </Text>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig"  style={styles.lowerSection}>
        <Animatable.View animation="fadeInRight"  style={styles.buttonStyle}>
          <CommonCustomButton
            text="Get started"
            onPress={() => navigation.navigate("Login")}
            color="#0793FD"
            iconName="navigate-next"
          />
        </Animatable.View>
        <View style={styles.big_bubble}></View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get("screen");

const logo_height = height * 0.17;

const logo_container_height = height * 0.22;
const big_bubble_height = height * 0.77;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0793FD",
  },
  upperSection: {
    flex: 2,
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
  paragraph: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    color: "white",
    width: "80%",
  },
  logo: {
    height: logo_height,
    width: logo_height,
  },
  logoSubSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
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

  welcomeSubSection: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
  },

  buttonStyle: {
    position: "absolute",
    right: 30,
    bottom: 70,
    zIndex: 9,
  },
  big_bubble: {
    height: big_bubble_height,
    width: big_bubble_height,
    backgroundColor: "#eee",
    borderRadius: 350,
    position: "absolute",
    right: -240,
    bottom: -280,
    zIndex: -2,
    shadowOpacity: 0.5,
    shadowColor: "#0570C1",
    shadowRadius: 5,
  },

});
