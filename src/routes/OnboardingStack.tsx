import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SignupScreen } from "../screens";
import React from "react";

const Stack = createStackNavigator();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
