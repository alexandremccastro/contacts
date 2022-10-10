const nodeEnv = process.env.VUE_APP_ENV ? process.env.VUE_APP_ENV : "";

const isProduction = nodeEnv.toLowerCase() === "production";

export default {
  nodeEnv,
  isProduction,
  appName: process.env.VUE_APP_NAME ? process.env.VUE_APP_NAME : "",
};
