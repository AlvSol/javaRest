import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

const user = {
  getAll: () => {
    const response = api.get("userAPI/all");
    return response.data;
  },

  createUser: (user) => {
    const response = api.post("userAPI/save", user);
    return response;
  },
};

const agent = {
  user,
};

export default agent;
