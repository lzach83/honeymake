import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Text,
  SafeAreaView,
} from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import { IntroCarousel, Button } from "../../components";
interface Props {}

export const CarouselScreen: React.FC<Props> = () => {
  //GLOBAL STATE

  //LOCAL STATE

  //HOOKS
  const { height, width } = useWindowDimensions();

  //FUNCTIONS

  //LIFECYCLE

  //RETURN
  return (
    <SafeAreaView style={styles.root}>
      <IntroCarousel />
      <Button
        variant="primary"
        onPress={() => console.log("Pressed")}
        disabled={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
