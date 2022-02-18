import axios from "axios";

export class HttpClient {
  baseUrl;

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(url) {
    return await axios.get(`${this.baseUrl}/${url}`);
  }

  async post(url, body) {
    return await axios.post(`${this.baseUrl}/${url}`, body);
  }
}
