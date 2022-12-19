import { http } from "./httpService";

export const handleAccessChat = async (userId) => {
  return http.post("/api/chat", { userId });
};

export const getAllChats = () => {
  return http.get("/api/chat");
};

export const createGroupChat = (users, name) => {
  return http.post("/api/chat/group", { users, name });
};

export const renameChatGroup = (chatId, name) => {
  return http.put("/api/chat/rename", { chatId, name });
};

export const addUserToGroup = (chatId, userId) => {
  return http.put("/api/chat/groupadd", { chatId, userId });
};

export const removeUserFromGroup = (chatId, userId) => {
  return http.put("/api/chat/groupremove", { chatId, userId });
};
