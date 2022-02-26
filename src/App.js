import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  }); 
  const [showProfile, setShowProfile] = useState(false);
  console.log(user, showProfile);

  return (
    <div className="App">
      <LoginContext.Provider value={{user, setUser, showProfile, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
