import React, { useContext, useEffect } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Text,
  Caption,
  TouchableRipple,
  Drawer,
  Switch,
  Title,
  useTheme,
} from "react-native-paper";
import MaterialIcons5 from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useQuery } from "react-apollo";

import { AuthContext } from "../../contexts/AuthContextProvider";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import { FETCH_ME } from "../../graphql/queries";
import Spinner from "../../components/Spinner";
import { getUserToken } from '../../utils/tokenUtils';
import {storeCurrentUser} from '../../utils/currentUserUtils';



const DrawerContent = (props) => {



  const { data, loading, error } = useQuery(FETCH_ME);
  const {dark} = useTheme();

  const { userLoggedIn } = useContext(AuthContext);
  const { changeTheme } = useContext(ThemeContext);

  const signOut = () => {
    return userLoggedIn();
  };

 
  
  if (loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <Spinner/>
    </View>
    )
  };

  if (error) {
    return (
      <View style={styles.drawerCOntent}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text >{error.message.split(":")[1]}</Text>
        </View>
        <Drawer.Section style={styles.drawerLowerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons5 name="exit-to-app" color={color} size={size} />
            )}
            label="Logout"
            onPress={() => signOut()}
          />
        </Drawer.Section>
      </View>
    );
  }


  return (
    <View style={styles.drawerCOntent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerCOntent}>
          {/* profile Section */}

          <View style={styles.profileSection}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Avatar.Image
                size={50}
                source={require("../../assets/logoBlue.png")}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{`${data.me.lastName} ${
                  data.me.firstName
                } `}</Title>
                <Caption >{`${data.me.userRole.name === 'admin' ? 'Admin' : 'User'}`}</Caption>
              </View>
            </View>
          </View>

          {/* Drawer items Section */}

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="md-home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="md-person" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => props.navigation.navigate("Profile")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="schedule" color={color} size={size} />
              )}
              label="Events"
              onPress={() => props.navigation.navigate("Events")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons5 name="finance" color={color} size={size} />
              )}
              label="Assets"
              onPress={() => props.navigation.navigate("Assets")}
            />
          </Drawer.Section>

          {/* preference Section */}

          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                changeTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark theme</Text>
                <View pointerEvents="none">
                  <Switch value={dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>

        {/* lower section with logout */}
      </DrawerContentScrollView>
      <Drawer.Section style={styles.drawerLowerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons5 name="exit-to-app" color={color} size={size} />
          )}
          label="Logout"
          onPress={() => signOut()}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerCOntent: {
    flex: 1,
  },
  profileSection: {
    paddingLeft: 20,
  },
  preference: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  paragraph: {
    fontWeight: "bold",
  },
  drawerSection: {
    marginTop: 15,
  },
  drawerLowerSection: {
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    marginBottom: 15,
  },
});
