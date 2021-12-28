import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from "@react-navigation/stack";
import {
  SignupScreen,
  CarouselScreen,
  LoginScreen,
  ForgotPasswordScreen,
} from "../screens";
import React from "react";
import { BackButton } from "../components";
import { navTheme } from "../theme/navTheme";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Easing } from "react-native";

const Stack = createSharedElementStackNavigator();

const FadeSpec: StackNavigationOptions = {
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 300,
        easing: Easing.ease,
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 300,
      },
    },
  },
  cardShadowEnabled: false,
  cardStyleInterpolator: ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

export const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Carousel">
      <Stack.Screen
        name="Carousel"
        component={CarouselScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        options={{
          ...FadeSpec,
          headerLeft: () => <BackButton arrow text="" />,
          headerLeftContainerStyle: {
            marginLeft: navTheme.containerMargin,
          },
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },
          cardStyle: {
            backgroundColor: "#fff",
          },
          headerTitle: "Create Account",
        }}
        component={SignupScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{
          ...FadeSpec,
          headerLeft: () => <BackButton arrow text="" />,
          headerLeftContainerStyle: {
            marginLeft: navTheme.containerMargin,
          },
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },
          cardStyle: {
            backgroundColor: "#fff",
          },
          headerTitle: "Login",
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Forgot-Password"
        options={{
          ...FadeSpec,
          headerLeft: () => <BackButton arrow text="" />,
          headerLeftContainerStyle: {
            marginLeft: navTheme.containerMargin,
          },
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
          },
          cardStyle: {
            backgroundColor: "#fff",
          },
          headerTitle: "Forgot Password",
        }}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
