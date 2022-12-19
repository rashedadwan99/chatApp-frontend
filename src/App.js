import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import { ChatState } from "./context/chatProvider";

function App() {
  const { user } = ChatState()

  return (
    <div className="App">
      <Switch>

        {/* <Route
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
        /> */}

        <Route path="/chats" exact component={ChatPage} />
        <Route path="/notFound" exact component={NotFoundPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
