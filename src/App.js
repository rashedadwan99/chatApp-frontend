import React from "react";
import { Switch, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";



function App() {
  const user = localStorage.getItem("user")

  return (
    <div className="App">
      <Switch>

        <Route path="/" component={HomePage} exact />
        <Route path="/chats" component={ChatPage} />

      </Switch>
    </div>
  );
}

export default App;
