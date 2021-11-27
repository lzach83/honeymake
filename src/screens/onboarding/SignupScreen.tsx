import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Text,
  TextInput,
  Button,
} from "react-native";

import { authService } from "../../services";
import { saveUser } from "../../models/user";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { User, Recipes } from "../../models";
interface Props {}

export const SignupScreen: React.FC<Props> = () => {
  //GLOBAL STATE

  //LOCAL STATE
  const [fields, setFields] = React.useState({
    username: "",
    password: "",
    email: "",
    phonenumber: "",
  });

  const [user, setUser] = React.useState<any>();
  const [recipe, setRecipe] = React.useState<any>();

  //HOOKS
  const { height, width } = useWindowDimensions();

  // React.useEffect(() => {
  //   fetchUser();
  //   const subscription = DataStore.observe(User).subscribe(() => fetchUser());
  //   return () => subscription.unsubscribe();
  // });
  //FUNCTIONS

  const addUser = async () => {
    try {
      await DataStore.save(
        new User({
          name: fields.username,
          email: fields.email,
          householdCode: "585-232",
        })
      );
    } catch (error) {
      console.log("ERR", error);
    }
  };

  const fetchUser = async () => {
    const user = await DataStore.query(User);
    setUser(user);

    console.log("USER:", user);
  };

  const testAddRecipe = async () => {
    await DataStore.save(
      new Recipes({
        householdCode: "585-232",
        name: "Steak",
        foodCategory: "Breakfast",
        quantity: "100",
      })
    );
  };

  const reset = async () => {
    await DataStore.delete(User, Predicates.ALL);
  };

  const fetchRecipe = async () => {
    const recipe = await DataStore.query(Recipes);

    setRecipe(recipe);
  };

  const handleSignUp = () => {
    authService.signUp(
      fields.username,
      fields.password,
      fields.email,
      "+1" + fields.phonenumber
    );
  };

  //LIFECYCLE

  //RETURN
  return (
    <View style={styles.root}>
      <TextInput
        onChangeText={(val) => setFields({ ...fields, email: val })}
        placeholder="email"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(val) => setFields({ ...fields, password: val })}
        placeholder="password"
        secureTextEntry
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(val) => setFields({ ...fields, username: val })}
        placeholder="Username"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={(val) => setFields({ ...fields, phonenumber: val })}
        placeholder="Phone Number"
        style={styles.textInput}
      />
      <Button onPress={handleSignUp} title={"Add User"} />
      <Button onPress={fetchUser} title={"Get User"} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    marginVertical: 14,
  },
});
