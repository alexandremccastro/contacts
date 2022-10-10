import APIClient from "@/core/http/apiClient";

class AuthProvider {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async login(data) {
    return await this.httpClient.call(`/login`, data, "post");
  }

  async logout() {
    return await this.httpClient.call(`/logout`, {}, "post");
  }

  async register(data) {
    return await this.httpClient.call(`/register`, data, "post");
  }
}

export default new AuthProvider(new APIClient());
