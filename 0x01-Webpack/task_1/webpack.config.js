const path = require("path");

module.exports = {
  entry: "./js/dashboard_main",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
