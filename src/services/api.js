import axios from "axios";

const url = "http://localhost:3001/api";

const api = {
  async register(data) {
    return await axios.post(`${url}/users/register`, data);
  },
  async login(data) {
    return await axios.post(`${url}/users/login`, data);
  },
  async getInfo(token) {
    return await axios.get(`${url}/users/user-info`, {
      headers: {
        "x-access-token": token,
      },
    });
  },
  async logout(token) {
    return await axios.delete(`${url}/users/logout`, {
      headers: {
        "x-access-token": token,
      },
    });
  },
};

export default api;
