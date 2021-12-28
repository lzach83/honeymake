import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  TextInput,
  StyleProp,
  Image,
  Pressable,
} from "react-native";
import theme from "../../theme";

interface Props {
  placeholder: string;
  value?: string;
  secureText?: boolean;
  onFocus?: () => void;
  setValue: (value: string) => void;
  label?: string;
  InputIcon: "Password" | "Personal-Info" | "Email";
  autoFocus?: boolean;
}

export const Input = React.forwardRef<TextInput, Props>(
  (
    {
      value,
      placeholder,
      secureText,
      onFocus,
      setValue,
      label,
      InputIcon,
      autoFocus,
    },
    ref: any
  ) => {
    //GLOBAL STATE

    //LOCAL STATE
    const [pwVisible, setPwVisible] = React.useState(true);
    const [localVal, setLocalVal] = React.useState({
      username: "",
      password: "",
      email: "",
      phonenumber: "",
    });

    //HOOKS
    const { height, width } = useWindowDimensions();

    //FUNCTIONS
    const setFields = (value) => {
      setValue(value);
    };
    //LIFECYCLE

    //RETURN
    const Icon = ({ type }) => {
      switch (type) {
        case "Password":
          return (
            <Image
              source={require("../../../assets/Lock.png")}
              style={styles.icon}
            />
          );
        case "Personal-Info":
          return (
            <Image
              source={require("../../../assets/Profile.png")}
              style={styles.icon}
            />
          );
        case "Email":
          return (
            <Image
              source={require(`../../../assets/Message.png`)}
              style={styles.icon}
            />
          );
        default:
          return (
            <Image
              source={require(`../../../assets/Message.png`)}
              style={styles.icon}
            />
          );
      }
    };

    return (
      <View style={theme.layout.wrapper}>
        {label ? (
          <Text style={[theme.fonts.text600, theme.colors.grayScale.gray100]}>
            {label}
          </Text>
        ) : null}
        <View style={styles.inputContainer}>
          <Icon type={InputIcon} />
          <TextInput
            ref={ref}
            placeholder={placeholder}
            onChangeText={(val: any) => setLocalVal(val)}
            style={[styles.standard, theme.fonts.text600]}
            secureTextEntry={secureText && pwVisible ? true : false}
            onFocus={onFocus}
            onBlur={() => setFields(localVal)}
            returnKeyType="done"
            autoFocus={autoFocus}
          />
          {secureText ? (
            <Pressable onPressIn={() => setPwVisible(!pwVisible)}>
              <Image
                source={require("../../../assets/Show.png")}
                style={styles.icon}
              />
            </Pressable>
          ) : null}
        </View>
      </View>
    );
  }
);
const styles = StyleSheet.create({
  standard: {
    flex: 1,
    marginVertical: 8,
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 24,
    width: 26,
    resizeMode: "contain",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.colors.grayScale.gray400,
    height: 54,
    borderRadius: 16,
    marginVertical: 10,
  },
});
