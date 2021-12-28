import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    return { status: "Success", data: userInfo };
  } catch (err) {
    if (err.code === statusCodes.SIGN_IN_CANCELLED) {
      console.error(err);
    } else if (err.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.error("operation (e.g. sign in) is in progress already", err);
    } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.error("play services not available or outdated", err);
    } else {
      console.error("UNKNOWN", err);
    }
  }
};

const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    return { status: "Success", data: userInfo };
  } catch (err) {
    if (err.code === statusCodes.SIGN_IN_REQUIRED) {
      console.log("NO USER SIGNED IN", err);
    } else {
      console.log("OTHER", err);
    }
  }
};

const isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  return { status: "Success", data: isSignedIn };
};

const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();

  return { status: "Success", data: currentUser };
};

const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    return { status: "SUCCESS" };
  } catch (err) {
    console.error("Failed", err);
  }
};

export const googleAuthService = {
  signIn,
  signOut,
  isSignedIn,
  getCurrentUser,
  getCurrentUserInfo,
};
