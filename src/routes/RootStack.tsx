import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppStack } from "./AppStack";
import { OnboardingStack } from "./OnboardingStack";
import { User } from "../models";

export const RootStack = () => {
  const [user, setUser] = React.useState<any>();
  const [authenticated, setAuthenticated] = React.useState(false);

  return authenticated ? <AppStack /> : <OnboardingStack />;
};
