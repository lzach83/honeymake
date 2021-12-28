import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Text,
  SafeAreaView,
} from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import { IntroCarousel, Button } from "../../components";
import { UserSchema } from "../../realm";
import Realm from "realm";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
interface Props {}

export const CarouselScreen: React.FC<Props> = () => {
  //GLOBAL STATE

  //LOCAL STATE
  const [fields, setFields] = React.useState({
    email: "TestingEmail",
    displayname: "Testingdisplayname",
    phoneNumber: "TestingNumber",
    householdCode: "TestingCode",
  });
  const [test, setTest] = React.useState(null);
  //HOOKS
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  //FUNCTIONS

  const addUser = async () => {
    const realm = await Realm.open({
      path: "myrealm",
      schema: [UserSchema],
    });

    realm.write(() => {
      const data = realm.create("User", {
        _id: "grdersre",
        email: fields.email,
        displayname: fields.displayname,
        phoneNumber: fields.phoneNumber,
        householdCode: fields.householdCode,
      });
      console.log("DATA", data);
    });
  };

  const query = async () => {
    const realm = await Realm.open({
      path: "myrealm",
      schema: [UserSchema],
    });

    const data = realm.objects("User");
    console.log("data", data);
  };
  //LIFECYCLE
  const [number, onChangeNumber] = React.useState(null);
  //RETURN
  return (
    <SafeAreaView style={styles.root}>
      <IntroCarousel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
