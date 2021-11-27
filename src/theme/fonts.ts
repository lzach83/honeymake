import { Platform } from "react-native";

const primaryFont = {
  normal: "Avenir-Book",
  light: "Avenir-Light",
  medium: "Avenir-Medium",
  bold: "Avenir-Heavy",
};

const primaryAndroidFont = {
  normal: "Roboto-Regular",
  light: "Roboto-Light",
  medium: "Roboto-Medium",
  bold: "Roboto-Bold",
};

const cardFont = {
  medium: "NunitoSans-SemiBold",
};

interface Fonts {
  primary: {
    normal: string;
    light: string;
    medium: string;
    bold: string;
  };
  card: {
    medium: string;
  };
  h1: any;
  h2: any;
  h3: any;
  text200: any;
  text400: any;
  text600: any;
}

const fonts: Fonts = {
  primary: Platform.OS === "android" ? primaryAndroidFont : primaryFont,
  card: cardFont,
  h1: {
    fontSize: 50,
    fontFamily:
      Platform.OS === "android" ? primaryAndroidFont.bold : primaryFont.bold,
    letterSpacing: -0.9,
    fontWeight: "700",
  },
  h2: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily:
      Platform.OS === "android" ? primaryAndroidFont.bold : primaryFont.bold,
  },
  h3: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily:
      Platform.OS === "android" ? primaryAndroidFont.bold : primaryFont.bold,
  },
  text200: {
    fontSize: 18,
    fontWeight: Platform.OS === "android" ? "400" : "700",
    fontFamily:
      Platform.OS === "android" ? primaryAndroidFont.bold : primaryFont.bold,
  },
  text400: {
    fontSize: 16,
    fontWeight: Platform.OS === "android" ? "400" : "700",
    fontFamily:
      Platform.OS === "android" ? primaryAndroidFont.bold : primaryFont.bold,
  },
  text600: {
    fontSize: 14,
    fontWeight: Platform.OS === "android" ? "400" : "700",
    fontFamily:
      Platform.OS === "android" ? primaryAndroidFont.bold : primaryFont.bold,
  },
};

export default fonts;
