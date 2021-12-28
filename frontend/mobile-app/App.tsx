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
  ActivityIndicator,
} from "react-native";
import { SignupScreen } from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/routes";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";

const App = () => {
  GoogleSignin.configure({
    webClientId:
      "21136506264-m35g12hu029c4blc9o7t1d1tqds1pp0f.apps.googleusercontent.com",
  });
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
