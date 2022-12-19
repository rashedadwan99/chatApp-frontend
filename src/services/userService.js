import { http } from "./httpService";
import config from "../config.json";
const apiEndPoint = config.apiUrl + "/user"
export const signUp = (data) => {
  return http.post(apiEndPoint, data);
};

export const login = (data) => {
  return http.post(`${apiEndPoint}/login`, data);
};

export const searchUser = (searchQuery) => {
  return http.get(`${apiEndPoint}?search=${searchQuery}`);
};
