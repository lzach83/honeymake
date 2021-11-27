import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

const signUp = async (username, password, email, phone_number) => {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number,
      },
    });

    await DataStore.save(
      new User({
        name: username,
        email: email,
        householdCode: "582-582",
      })
    );

    console.log("Signed up user: ", user);
  } catch (err) {
    console.log("ERR: ", err);
  }
};

const confirmSignUp = async (username, code) => {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (err) {
    console.log("Error signing up: ", err);
  }
};

const signIn = async (username, password) => {
  try {
    const user = await Auth.signIn(username, password);
  } catch (err) {
    console.log("Error signing in: ", err);
  }
};

const resendConfirmationCode = async (username) => {
  try {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
};

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (err) {
    console.log("Error signing out: ", err);
  }
};

export const authService = {
  signIn,
  signOut,
  resendConfirmationCode,
  confirmSignUp,
  signUp,
};
