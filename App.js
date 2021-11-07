/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from "react-native";
import { getAllUsers, openRealm, addUser } from "./src/realm";
import Realm from "realm";
import { User } from "./src/realm";

const App = () => {
  const [user, setUser] = React.useState(getAllUsers());

  const handlePress = () => {
    addUser("123", "Zach", "Lee", "5858252");
  };
  console.log("User", user);
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button
        title={"Testing"}
        onPress={() => {
          setUser(getAllUsers());
          handlePress();
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
