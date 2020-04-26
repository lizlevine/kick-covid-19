// module.exports = (apiClient) => ({
//   login: async ({ email, password }) => {
//     const {
//       data: { token, user },
//     } = await apiClient.post("/auth/login", {
//       email,
//       password,
//     });
//     localStorage.setItem(process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY, token);
//     return user;
//   },
//   signup: ({ email, password }) =>
//     apiClient.post("/users", { email, password }),
//   logout: () =>
//     localStorage.removeItem(process.env.REACT_APP_TOKEN_LOCAL_STORAGE_KEY),
//   me: () => {
//     const token = localStorage.getItem("__kickcovid19_token");
//     return apiClient.get("/auth/me", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   },
// });
import axios from "axios";

export const login = async (email, password) => {
  // do stuff
  const {
    data: { token, user },
  } = await axios.post("/auth/login", { email, password });
  console.log(token);
  localStorage.setItem("__kickcovid19_token", token);
  console.log(user);
};

export const me = async () => {
  const token = localStorage.getItem("__kickcovid19_token");
  return await axios.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
