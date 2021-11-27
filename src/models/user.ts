import { DataStore } from "aws-amplify";
import { User } from "./index";

export const saveUser = async (name, email, householdCode) => {
  try {
    await DataStore.save(
      new User({
        name: name,
        email: email,
        householdCode: householdCode,
      })
    );
  } catch (err) {
    console.log("ERR", err);
  }
};

export const getUser = async () => {
  await DataStore.query(User);
};
