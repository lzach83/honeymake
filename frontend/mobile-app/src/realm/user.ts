import Realm from "realm";

export const UserSchema = {
  name: "User",
  properties: {
    _id: "string",
    displayname: "string",
    email: "string",
    phoneNumber: "string",
    householdCode: "string",
  },
  primaryKey: "_id",
};
