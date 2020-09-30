import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { TouchableRipple, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

export default function EditProfileScreen() {
  const { dark, colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <View style={styles.imageBox}>
            <ImageBackground
              source={require("../assets/f66cf998-4515-4b15-9cdf-3af7fe146546.jpg")}
              style={styles.image}
            >
              <View style={styles.cameraIconContainer}>
                <Icon
                  style={styles.cameraIcon}
                  name="camera"
                  size={35}
                  color={colors.background}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.inputFieldContainer}>
          <Icon
            name="user-o"
            size={20}
            color={dark ? colors.tagBg : colors.tagText}
          />
          <TextInput
            style={styles.inputField}
            placeholder="First Name"
            placeholderTextColor={dark ? colors.tagText : colors.placeholder}
            autoCapitalize="none"
            autoCorrect={false}
            color= {dark ? colors.tagBg : colors.tagText}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Icon
            name="user-o"
            size={20}
            color={dark ? colors.tagBg : colors.tagText}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Last Name"
            placeholderTextColor={dark ? colors.tagText : colors.placeholder}
            autoCapitalize="none"
            autoCorrect={false}
            color= {dark ? colors.tagBg : colors.tagText}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Icon
            name="user-o"
            size={20}
            color={dark ? colors.tagBg : colors.tagText}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Username"
            placeholderTextColor={dark ? colors.tagText : colors.placeholder}
            autoCapitalize="none"
            autoCorrect={false}
            color= {dark ? colors.tagBg : colors.tagText}
          />
        </View>
        <View style={styles.inputFieldContainer}>
          <Icon
            name="envelope-o"
            size={20}
            color={dark ? colors.tagBg : colors.tagText}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            placeholderTextColor={dark ? colors.tagText : colors.placeholder}
            autoCapitalize="none"
            autoCorrect= {false}
            color= {dark ? colors.tagBg : colors.tagText}
            keyboardType="email-address"
          />
        </View>
        <View style={[styles.inputFieldContainer]}>
          <Feather
            name="phone"
            size={20}
            color={dark ? colors.tagBg : colors.tagText}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Phone"
            placeholderTextColor={dark ? colors.tagText : colors.placeholder}
            autoCapitalize="none"
            autoCorrect={false}
            color= {dark ? colors.tagBg : colors.tagText}
            keyboardType="number-pad"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn}>
          <Text style={{fontWeight: 'bold', color: "#e5e5e5", fontSize: 18}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    padding: 5,
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 150,
    width: 150,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 15,
    overflow: "hidden",
  },
  cameraIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cameraIcon: {
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    // padding: 40,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 30
  },
  inputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: .7,
    paddingVertical: 5,
    borderBottomColor: '#e5e5e5'
  },
  inputField: {
    marginLeft: 10,
  },
  submitBtn: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#0793FD',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10
  },

});
