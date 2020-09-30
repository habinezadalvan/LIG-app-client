import React, { useContext } from "react";
import { Button, SafeAreaView, View, StyleSheet } from "react-native";
import {
  Text,
  Title,
  Caption,
  TouchableRipple,
  Avatar,
  Drawer,
  useTheme,
} from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import FontIcons from "react-native-vector-icons/FontAwesome5";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons5 from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerItem } from "@react-navigation/drawer";
import EditProfileScreen from "./EditProfileScreen";

import { ScreenContainer } from "./screens";
import { AuthContext } from "../contexts/AuthContextProvider";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = ({ navigation }) => {
  const {dark, colors} = useTheme();
  return (
    <ProfileStack.Navigator screenOptions= {{
      headerStyle: {
        backgroundColor: colors.background,
        shadowColor: colors.background, //ios
        elevation: 0, //android
      }
    }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          title: "My profile",
          headerLeft: () => (
            <FontIcons
              name="bars"
              style={{ marginLeft: 25 }}
              size={25}
              color="gray"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialIcons5
              name="account-edit"
              size={25}
              color="gray"
              style={{ marginRight: 25 }}
              onPress={() => navigation.navigate("Editprofile")}
            />
          ),
        })}
      />
      <ProfileStack.Screen
        name="Editprofile"
        component={EditProfileScreen}
        options={{
          title: 'Edit profile',
        headerBackTitle: "back",
        headerTintColor: `${dark ? colors.tagBg : colors.tagText}`
        }}
      />
    </ProfileStack.Navigator>
  );
};

export const Profile = ({ navigation }) => {
  const { userLoggedIn } = useContext(AuthContext);
  const { dark, colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <View
          style={{
            flexBasis: "25%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar.Image
            source={require("../assets/f66cf998-4515-4b15-9cdf-3af7fe146546.jpg")}
            size={80}
          />
        </View>
        <View style={{ flexBasis: "75%", padding: 7 }}>
          <Title
            style={{
              color: `${dark ? colors.tagBg : colors.tagText}`,
              fontWeight: "bold",
            }}
          >
            habinezadalvan
          </Title>
          <Caption>Secretary</Caption>
        </View>

        {/* <View style={{flexBasis: '10%', padding: 7}} ><Icons name="account" color={dark ? colors.tagBg : colors.tagText} size={20} /></View> */}
      </View>

      <Drawer.Section style={styles.userInfo}>
        <View style={styles.info}>
          <Icons
            name="account"
            color={dark ? colors.tagBg : colors.tagText}
            size={20}
          />
          <Text
            style={[
              styles.userInfoText,
              { color: `${dark ? colors.tagBg : colors.tagText}` },
            ]}
          >
            Habineza Leon Christian
          </Text>
        </View>
        <View style={styles.info}>
          <Icons
            name="email"
            color={dark ? colors.tagBg : colors.tagText}
            size={20}
          />
          <Text
            style={[
              styles.userInfoText,
              { color: `${dark ? colors.tagBg : colors.tagText}` },
            ]}
          >
            habinezadalvan@gmail.com
          </Text>
        </View>
        <View style={styles.info}>
          <Icons
            name="phone"
            color={dark ? colors.tagBg : colors.tagText}
            size={20}
          />
          <Text
            style={[
              styles.userInfoText,
              { color: `${dark ? colors.tagBg : colors.tagText}` },
            ]}
          >
            +2507800000000
          </Text>
        </View>
      </Drawer.Section>

      <Drawer.Section style={styles.statusSection}>
        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusBox,
              {
                borderRightWidth: 1,
                borderRightColor: `${dark ? colors.tagText : "#e5e5e5e5"}`,
              },
            ]}
          >
            <Text
              style={{
                fontWeight: "500",
                color: `${dark ? colors.tagBg : colors.tagText}`,
              }}
            >
              Active
            </Text>
          </View>
          <View style={styles.statusBox}>
            <Text
              style={{
                fontWeight: "500",
                color: `${dark ? colors.tagBg : colors.tagText}`,
              }}
            >
              admin
            </Text>
          </View>
        </View>
      </Drawer.Section>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 0.2,
        }}
      >
        <DrawerItem
          style={{ width: "40%" }}
          icon={({ color, size }) => (
            <MaterialIcons5 name="exit-to-app" color={color} size={size} />
          )}
          label="Logout"
          onPress={() => userLoggedIn()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    flexDirection: "row",
    alignContent: "center",
    padding: 30,
  },
  userInfo: {
    paddingHorizontal: 30,
  },
  userInfoText: {
    marginLeft: 20,
    fontWeight: "500",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  statusSection: {
    paddingHorizontal: 30,
    paddingVertical: 0,
  },

  statusContainer: {
    flexDirection: "row",
    position: "relative",
    marginVertical: 0,
  },
  statusBox: {
    flexBasis: "50%",
    height: "100%",
    alignItems: "center",
    padding: 30,
  },
  statusSectionTwo: {
    flexBasis: "50%",
  },
});
