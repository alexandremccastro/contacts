import axios from "axios";
import session from "@/core/utils/session";
import router from "@/router";

const responseHandler = async (response) => {
  if (response.status == 401) {
    session.destroy();
    return await router.push({ name: "Login" });
  } else {
    return response;
  }
};

export default class HttpClient {
  constructor(baseURL) {
    this.request = axios.create({
      baseURL,
      timeout: 10000,
    });

    this.request.interceptors.response.use((response) =>
      responseHandler(response)
    );
  }

  async get(url, params, config) {
    const urlParams = new URLSearchParams(params).toString();
    return this.request.get(`${url}?${urlParams}`, config);
  }

  async post(url, params, config) {
    return this.request.post(url, params, config);
  }

  async put(url, params, config) {
    return this.request.put(url, params, config);
  }

  async patch(url, params, config) {
    return this.request.patch(url, params, config);
  }

  async delete(url, params, config) {
    const urlParams = new URLSearchParams(params).toString();
    return this.request.delete(`${url}?${urlParams}`, config);
  }

  async call() {
    throw new Error("Method not implemented.");
  }
}
