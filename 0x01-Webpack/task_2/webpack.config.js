const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  mode: "production",
  module: {
    rules: [
      {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jp?g|svg)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
