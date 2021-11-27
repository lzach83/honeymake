import Auth from "@aws-amplify/auth";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppStack } from "./AppStack";
import { OnboardingStack } from "./OnboardingStack";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models";

export const RootStack = () => {
  const [user, setUser] = React.useState<any>();
  const [authenticated, setAuthenticated] = React.useState(false);

  const getAuthenticatedUser = async () => {
    const user = await DataStore.query(User);

    if (user) {
      setAuthenticated(true);
      setUser(user);
    } else {
      setAuthenticated(false);
    }
  };

  React.useEffect(() => {
    getAuthenticatedUser();
    const sub = DataStore.observe(User).subscribe(() => getAuthenticatedUser());
    return () => sub.unsubscribe();
  }, []);

  return authenticated ? <AppStack /> : <OnboardingStack />;
};
