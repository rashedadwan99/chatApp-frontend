import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ChatProvider from "./context/chatProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <Route path="/*" component={App} />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>
);
