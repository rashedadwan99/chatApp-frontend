import { http } from "./httpService";

export const sendMessageHandler = (content, chatId) => {
  return http.post("/api/message", { chatId, content });
};

export const getAllMessages = (chatId) => {
  return http.get(`/api/message/${chatId}`);
};
