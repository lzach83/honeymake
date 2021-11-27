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
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import { listUsers } from "./src/graphql/queries";

const App = () => {
  const [sClient, setSClient] = React.useState(null);
  // const client = new ApolloClient({
  //   uri: "https://e6ebmyu4craxllldbpt4shfu3e.appsync-api.us-east-1.amazonaws.com/graphql",
  //   cache: new InMemoryCache(),
  //   headers: {
  //     "X-Api-Key": "da2-2stzev7j4jfd3nvhzfdj56psku",
  //   },
  // });

  return (
    // <ApolloProvider client={client}>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    // </ApolloProvider>
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
