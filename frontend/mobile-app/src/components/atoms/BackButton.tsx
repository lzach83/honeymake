import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  arrow?: boolean;
  text: string;
  customAction?: () => void;
  white?: boolean;
}

export const BackButton: React.FC<Props> = ({
  arrow,
  text,
  white,
  customAction,
}) => {
  const navigation = useNavigation<StackNavigationProp<{}>>();
  const goBack = () => (customAction ? customAction() : navigation.goBack());

  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      {arrow && (
        <Image
          style={styles.arrow}
          resizeMode="contain"
          source={
            white
              ? require("../../../assets/back-arrow-light.png")
              : require("../../../assets/back-arrow.png")
          }
        />
      )}
      <Text style={[styles.text, white && { color: "#fff" }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    ...theme.fonts.text600,
    color: theme.colors.grayScale.gray100,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  arrow: {
    width: 16,
    margin: 14,
  },
});
