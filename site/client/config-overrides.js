const {
  removeModuleScopePlugin,
  override,
  babelInclude,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  removeModuleScopePlugin(), // remove module which doesn't allow code outside of src
  babelInclude([
    path.resolve("src"),
    path.resolve("../api-client"), // additional libararies to add
  ])
);
