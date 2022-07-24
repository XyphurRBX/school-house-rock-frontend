const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: process.env.API_SERVER_URL,
    allowedHosts: "all",
  },
});
