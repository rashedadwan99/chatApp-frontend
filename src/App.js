import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";
import { ChatState } from "./context/chatProvider";

function App() {
  const { user } = ChatState();
  const [isLoggedIn, setIsLoggedIn] = useState()
  useEffect(() => {
    setIsLoggedIn(user)
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route path="/notFound" exact component={NotFoundPage} />
        <Route
          path="/chats"
          render={(props) => {
            if (isLoggedIn) return <ChatPage {...props} />;
            else return <Redirect to="/" />;
          }}
        />
        <Route
          path="/"
          render={(props) => {
            if (!isLoggedIn) return <HomePage {...props} />;
            else return <Redirect to="/chats" />;
          }}
        />



        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
