import appConfig from "./app.config";

export default {
  baseUrl: appConfig.isProduction
    ? window.location.origin + "/api"
    : process.env.VUE_APP_API_URL,
};
