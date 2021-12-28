import { Auth } from "aws-amplify";
import React from "react";

export const customAttribute = async (customAttribute: String) => {
  let user = await Auth.currentAuthenticatedUser();

  const { attributes } = user;

  return attributes[`custom:${customAttribute}`];
};
