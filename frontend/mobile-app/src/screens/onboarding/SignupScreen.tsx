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
import { Input } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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

  //LIFECYCLE

  //RETURN
  return (
    <KeyboardAwareScrollView
      style={styles.root}
      keyboardShouldPersistTaps={"always"}
    >
      <Input
        setValue={(val) => setFields({ ...fields, email: val })}
        placeholder="email"
        label="Email"
        InputIcon="Email"
      />
      <Input
        setValue={(val) => setFields({ ...fields, password: val })}
        placeholder="password"
        secureText
        label="Password"
        InputIcon="Password"
      />
      <Input
        setValue={(val) => setFields({ ...fields, username: val })}
        placeholder="Username"
        label="Username"
        InputIcon="Personal-Info"
      />
      <Input
        setValue={(val) => setFields({ ...fields, phonenumber: val })}
        placeholder="Phone Number"
        label="Phone Number"
        InputIcon="Personal-Info"
      />
      <Button onPress={() => console.log("PRESSED")} title={"Add User"} />
      {/* <Button onPress={fetchUser} title={"Get User"} /> */}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textInput: {
    marginVertical: 14,
  },
});
