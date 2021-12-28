import auth from "@react-native-firebase/auth";

interface SignIn {
  email: string;
  password: string;
}
const signIn = async (user: SignIn) => {
  try {
    const userData = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password
    );
    return { result: "SUCCESS", data: userData };
  } catch (err) {
    console.error("ERROR", err);
  }
};

const signOut = async () => {
  try {
    const result = await auth().signOut();
    return { result: "SUCCESS", data: result };
  } catch (err) {
    console.log("ERR", err);
  }
};

export const fireService = {
  signIn,
  signOut,
};
