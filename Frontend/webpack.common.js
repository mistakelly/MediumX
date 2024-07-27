const { rule } = require("postcss");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "script.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },

      
    ],
  },
};
