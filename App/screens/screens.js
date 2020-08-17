import React, {useContext} from "react";

import { View, Text, Button, StyleSheet } from "react-native";
import {CreateAuthContext} from '../context';




export const ScreenContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export const SignIn = ({ navigation }) => {
    const {login} = useContext(CreateAuthContext);
  return (
    <ScreenContainer>
      <Text>Sign in</Text>
      <Button
        style={styles.button}
        title="Sign in"
        onPress={() => login()}
      ></Button>
      {/* <Button
        style={styles.button}
        title="Create account"
        onPress={() => navigation.push("create account")}
      ></Button> */}
    </ScreenContainer>
  );
};
export const WelcomePage = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Welcome to Luxary Investment Group</Text>
      {/* <Button
        style={styles.button}
        title="Create account"
        onPress={() => signUp()}
      ></Button> */}
      <Button
        style={styles.button}
        title="Login"
        onPress={() => navigation.push('Login')}
      ></Button>
    </ScreenContainer>
  );
};

export const Home = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Welcome to our App</Text>
      <Button
        style={styles.button}
        title="React native by example"
        onPress={() =>
          navigation.push("Details", { name: "React native by example" })
        }
      />
      <Button
        style={styles.button}
        title="React native school"
        onPress={() =>
          navigation.push("Details", { name: "React native school" })
        }
      />
      <Button style={styles.button} title="Drawer" onPress={() => navigation.toggleDrawer()}/>

    </ScreenContainer>
  );
};

export const Details = ({ route }) => {
  console.log("route", route.params.name);
  return (
    <ScreenContainer>
      <Text>Details page</Text>
      <Text>{route.params.name}</Text>
    </ScreenContainer>
  );
};
export const Search = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Search page</Text>
      <Button
        title="Search 2"
        onPress={() => navigation.push("search 2 page")}
      />
      <Button
        title="React native school"
        onPress={() =>
          navigation.navigate('Home', {
              screen: 'Details',
              params: {
                name: "this are the params you were asking me..",
              }
          })
        }
      />
    </ScreenContainer>
  );
};

export const Search2 = () => {
  return (
    <ScreenContainer>
      <Text>Search two page</Text>
    </ScreenContainer>
  );
};


export const Profile = ({navigation}) => {
    const {signOut} = useContext(CreateAuthContext);
    return(
        <ScreenContainer>
            <Text>Profile page</Text>
            <Button title="Sign out" onPress={() => signOut()}/>
        </ScreenContainer>
    )
}

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
