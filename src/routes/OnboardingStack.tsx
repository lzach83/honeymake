import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SignupScreen, CarouselScreen } from "../screens";
import React from "react";

const Stack = createStackNavigator();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Carousel">
      <Stack.Screen name="Carousel" component={CarouselScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
