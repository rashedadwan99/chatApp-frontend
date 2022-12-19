import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  const user = localStorage.getItem("user")

  return (
    <div className="App">
      <Switch>
        <Route path="/notFound" exact component={NotFoundPage} />
        <Route
          path="/chats"
          render={(props) =>
            user ? <ChatPage {...props} /> :
              <Redirect to="/" />
          }
        />
        <Route
          path="/"
          render={(props) =>
            !user ? <HomePage {...props} /> :
              <Redirect to="/chats" />
          }
        />

        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
