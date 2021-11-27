import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { OnboardingStack } from "./OnboardingStack";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Platform } from "react-native";
const Stack = createSharedElementStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Onboarding"}
        component={OnboardingStack}
        options={{
          header: () => null,
          cardStyle: {
            backgroundColor: "#fff",
          },
          cardStyleInterpolator:
            Platform.OS === "android"
              ? CardStyleInterpolators.forFadeFromBottomAndroid
              : CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
