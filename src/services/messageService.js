import { http } from "./httpService";
import config from "../config.json";
const apiEndPoint = config.apiUrl + "/message"
export const sendMessageHandler = (content, chatId) => {
  return http.post(apiEndPoint, { chatId, content });
};

export const getAllMessages = (chatId) => {
  return http.get(`${apiEndPoint}/${chatId}`);
};
