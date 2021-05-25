console.log("命令行工具");
const pkg = require("../package.json");
const plugins = Object.keys(pkg.dependencies)
  .filter((key) => key.includes("@niu/cli-plugin"))
  .map((key) => require(key));

plugins.forEach((plugin) => plugin());
