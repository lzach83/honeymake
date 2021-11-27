/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import config from "./src/aws-exports";
import awsconfig from "./src/aws-exports";
Amplify.configure(config);
Auth.configure(awsconfig);

AppRegistry.registerComponent(appName, () => App);
