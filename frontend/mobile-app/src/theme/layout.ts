import { Dimensions, StyleSheet } from "react-native";

const layout = StyleSheet.create({
  wrapper: {
    width: Dimensions.get("screen").width,
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default layout;
