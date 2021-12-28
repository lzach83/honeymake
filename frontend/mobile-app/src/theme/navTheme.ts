import { StyleProp, ViewStyle, Platform } from "react-native";

interface NavTheme {
  header: StyleProp<ViewStyle>;
  headerModal: StyleProp<ViewStyle>;
  card: StyleProp<ViewStyle>;
  containerMargin: number;
  marginHeaderTop: number;
  headerModalPadding: number;
}

export const navTheme: NavTheme = {
  header: {
    borderBottomWidth: 0,
    elevation: 0,

    // height: 105,
    shadowOpacity: 0,
  },
  headerModal: {
    borderBottomWidth: 0,
    // elevation: 0,
    // paddingTop: 0,
    // backgroundColor: "blue",
    // height: 75,
    shadowOpacity: 0,
  },
  headerModalPadding: Platform.OS === "android" ? 0 : 18,
  card: {
    // paddingTop: 12,
    backgroundColor: "#fff",
  },
  marginHeaderTop: 32,
  containerMargin: 24,
};
