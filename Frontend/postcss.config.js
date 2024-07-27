module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*"],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
