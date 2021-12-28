const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();
const path = require("path");
const { getMetroTools } = require("react-native-monorepo-tools");
const exclusionList = require("metro-config/src/defaults/exclusionList");
const monorepoMetroTools = getMetroTools();

// exports.resolver = {
//   ...defaultResolver,
//   sourceExts: [...defaultResolver.sourceExts, "cjs"],
//   projectRoot: path.resolve("../../"),
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   watchFolders: monorepoMetroTools.watchFolders
//   this.resolver
// };

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },

  watchFolders: monorepoMetroTools.watchFolders,
  resolver: {
    blockList: exclusionList(monorepoMetroTools.blockList),
    extraNodeModules: monorepoMetroTools.extraNodeModules,
  },
};
