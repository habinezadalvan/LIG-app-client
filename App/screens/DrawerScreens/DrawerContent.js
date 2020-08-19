import React, {useState, useContext} from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Text,
  Caption,
  TouchableRipple,
  Drawer,
  Switch,
  Title,
} from "react-native-paper";
import MaterialIcons5 from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {CreateAuthContext} from '../../context';

export const DrawerContent = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const {signOut} = useContext(CreateAuthContext);


    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
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
                  <Avatar.Image size={50} source={require('../../assets/logoBlue.png')} />
                  <View style={{ marginLeft: 15, flexDirection: "column" }}>
                    <Title style={styles.title}>Kanyengoga Emmanuel</Title>
                    <Caption>Admin</Caption>
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
                  onPress={() => {props.navigation.navigate('Home')}}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <Ionicons name="md-person" color={color} size={size} />
                  )}
                  label="Profile"
                  onPress={() => props.navigation.navigate('Profile')}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <MaterialIcons name="schedule" color={color} size={size} />
                  )}
                  label="Events"
                  onPress={() => props.navigation.navigate('Events')}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <MaterialIcons5 name="finance" color={color} size={size} />
                  )}
                  label="Assets"
                  onPress={() => props.navigation.navigate('Assets')}
                />
              </Drawer.Section>
      
              {/* preference Section */}
      
              <Drawer.Section title="Preferences">
                <TouchableRipple onPress={() => {changeTheme()}}>
                  <View style={styles.preference}>
                    <Text>Dark theme</Text>
                    <View pointerEvents="none"><Switch value={isDarkTheme} /></View>
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
      )
};

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
    alignItems: 'center',
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
