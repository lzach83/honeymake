import Realm from "realm";
export const UserSchema = {
  name: "User",
  properties: {
    _id: "string",
    fName: "string",
    lName: "string",
    houseHoldCode: "string",
  },
  primaryKey: "_id",
};

let realm = new Realm({ schema: [UserSchema], schemaVersion: 4 });

let getAllUsers = () => {
  return realm.objects("User");
};

let addUser = (
  _id: string,
  fName: string,
  lName: string,
  houseHoldCode: string
) => {
  realm.write(() => {
    realm.create("User", {
      _id: _id,
      fName: fName,
      lName: lName,
      houseHoldCode: houseHoldCode,
    });
  });
};

export { getAllUsers, addUser };
