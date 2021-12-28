import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Text,
} from "react-native";
import { Input, Button } from "../../components";
import theme from "../../theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
interface Props {}

export const ForgotPasswordScreen = () => {
  //GLOBAL STATE

  //LOCAL STATE
  const [email, setEmail] = React.useState<string>("");
  const input = React.useRef();

  //HOOKS
  const { height, width } = useWindowDimensions();

  //FUNCTIONS

  //LIFECYCLE
  React.useEffect(() => {});

  //RETURN
  return (
    <>
      <View style={styles.root}>
        <Text style={styles.text}>
          Enter your email and we will send you a link to reset your password
        </Text>
        <Input
          placeholder="Enter Email Address"
          InputIcon="Email"
          setValue={(val) => setEmail(val)}
          label="Email Address"
          autoFocus={true}
        />
        <View style={{ flex: 1, marginVertical: height / 5 }}>
          <Button
            variant="primary"
            onPress={() => console.log("PRESSED")}
            text="Send Email"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    ...theme.layout.wrapper,
  },
  text: {
    ...theme.fonts.text600,
    fontSize: 16,
    color: theme.colors.grayScale.gray200,
    marginVertical: 15,
  },
});
