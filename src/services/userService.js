import { http } from "./httpService";

export const signUp = (data) => {
  return http.post("/api/user", data);
};

export const login = (data) => {
  return http.post("/api/user/login", data);
};

export const searchUser = (searchQuery) => {
  return http.get(`/api/user?search=${searchQuery}`);
};
