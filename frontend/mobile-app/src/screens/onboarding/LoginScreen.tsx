import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Text,
  Image,
  Pressable,
} from "react-native";

import { googleAuthService, fireService } from "../../services";
import { Input, Button } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AppleButton } from "@invertase/react-native-apple-authentication";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/core";
import { firebase } from "@react-native-firebase/auth";
interface Props {}

export const LoginScreen: React.FC<Props> = () => {
  //GLOBAL STATE

  //LOCAL STATE
  const [fields, setFields] = React.useState({
    username: "",
    password: "",
    email: "",
    phonenumber: "",
  });

  const input = React.useRef<any>();

  const [user, setUser] = React.useState<any>();
  const [recipe, setRecipe] = React.useState<any>();

  //HOOKS
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  //FUNCTIONS

  const handleSignIn = async () => {
    await input.current.blur();
    await fireService.signIn({
      ...fields,
      email: fields.email,
      password: fields.password,
    });
  };

  React.useEffect(() => {
    const res = firebase.auth().currentUser.getIdToken(true);
    res.then((val) => console.log("VAL", val));
  }, []);

  //LIFECYCLE

  //RETURN
  return (
    <>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Input
            ref={input}
            setValue={(val) => setFields({ ...fields, email: val })}
            placeholder="Enter Email Address"
            label="Email"
            InputIcon="Email"
          />
          <Input
            ref={input}
            setValue={(val) => setFields({ ...fields, password: val })}
            placeholder="Enter Password"
            secureText
            label="Password"
            InputIcon="Password"
          />
        </View>
        <View style={{ marginVertical: 20, alignItems: "center" }}>
          <Button onPress={handleSignIn} variant="primary" text="Login" />
          <Pressable
            style={{ marginTop: 25 }}
            onPress={() => navigation.navigate("Forgot-Password")}
          >
            <Text
              style={[
                theme.fonts.text600,
                { color: theme.colors.grayScale.gray200 },
              ]}
            >
              Forgot Password?
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
      <View
        style={[
          theme.layout.wrapper,
          {
            alignItems: "center",
            bottom: 50,
          },
        ]}
      >
        <Text
          style={[
            theme.fonts.text600,
            { color: theme.colors.grayScale.gray300 },
          ]}
        >
          or continue with
        </Text>
        <Pressable onPress={googleAuthService.signIn}>
          <Image
            source={require("../../../assets/gButton.png")}
            style={{ width: width - 50, height: 100 }}
            resizeMode="contain"
          />
        </Pressable>
        <AppleButton
          onPress={() => console.log("APPLE")}
          style={{
            width: width - 85,
            height: 48,
            borderRadius: 15,
            marginVertical: 5,
          }}
          buttonStyle={AppleButton.Style.BLACK}
          buttonType={AppleButton.Type.SIGN_IN}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    marginTop: 20,
  },
  textInput: {
    marginVertical: 14,
  },
});
