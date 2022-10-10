import APIClient from "@/core/http/apiClient";

export class ContactProvider {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async create(data) {
    return await this.httpClient.call("/contacts", data, "post");
  }

  async update(uuid, data) {
    return await this.httpClient.call(`/contacts/${uuid}`, data, "put");
  }

  async find(uuid) {
    return await this.httpClient.call(`/contacts/${uuid}`, {}, "get");
  }

  async filter(params) {
    return await this.httpClient.call("/contacts", params, "get");
  }

  async delete(params) {
    return await this.httpClient.call(
      `/contacts/${params.uuid}`,
      undefined,
      "delete"
    );
  }

  async undelete(params) {
    return await this.httpClient.call(
      `/contacts/${params.uuid}`,
      undefined,
      "patch"
    );
  }
}

export default new ContactProvider(new APIClient());
