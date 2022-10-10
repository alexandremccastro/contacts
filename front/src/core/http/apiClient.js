import apiConfig from "@/core/config/api.config";
import HttpClient from "@/core/http/httpClient";
import session from "@/core/utils/session";

export default class APIClient extends HttpClient {
  constructor() {
    super(apiConfig.baseUrl);
  }

  async call(url, params = {}, method = "GET") {
    const user = session.get("user");
    const headers = {};

    if (user) {
      Object.assign(headers, {
        Authorization: `Bearer ${user.token}`,
      });
    }

    method = method.toLowerCase();

    let callback = null;

    if (method == "post") {
      callback = this.post(url, params, {
        headers,
      });
    } else if (method == "put") {
      callback = this.put(url, params, {
        headers,
      });
    } else if (method == "patch") {
      callback = this.patch(url, params, {
        headers,
      });
    } else if (method == "delete") {
      callback = this.delete(url, params, { headers });
    } else {
      callback = this.get(url, params, { headers });
    }

    try {
      let res = await callback;
      return this._shortResponse(res);
    } catch (err) {
      throw this._shortResponse(err);
    }
  }

  _shortResponse(res) {
    return res.response ? res.response.data : res.data;
  }
}
