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
  disabled: boolean;
  variant: "primary" | "light";
}

export const Button: React.FC<Props> = ({ variant, disabled, onPress }) => {
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
        style={[styles[variant], { width: width - 80, height: 55 }]}
        onPress={onPress}
      >
        <Text style={styles[textStyle]}>Next</Text>
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
