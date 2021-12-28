import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import theme from "../../theme";

interface Props {
  onPress: () => void;
  disabled?: boolean;
  variant: "primary" | "light";
  text: string;
}

export const Button: React.FC<Props> = ({
  variant,
  disabled,
  onPress,
  text,
}) => {
  //GLOBAL STATE

  //LOCAL STATE

  //HOOKS
  const { height, width } = useWindowDimensions();

  //FUNCTIONS

  //LIFECYCLE

  //RETURN
  const textStyle: "defaultText" = `${variant}Text` as any;
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles[variant], { height: 55, width: width - 50 }]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles[textStyle]}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  primary: {
    backgroundColor: theme.colors.brand.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  primaryText: {
    color: theme.colors.grayScale.gray600,
    fontFamily: theme.fonts.primary.normal,
  },
});
