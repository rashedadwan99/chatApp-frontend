import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const user = localStorage.getItem("user");

  return (
    <div className="App">
      <Switch>

        <Route
          path="/chats"
          render={(props) => {
            if (user) return <ChatPage {...props} />;
            else return <Redirect to="/" />;
          }}
        />
        <Route
          path="/"
          render={(props) => {
            if (!user) return <HomePage {...props} />;
            else return <Redirect to="/chats" />;
          }}
        />
        <Route path="/notFound" exact component={NotFoundPage} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
