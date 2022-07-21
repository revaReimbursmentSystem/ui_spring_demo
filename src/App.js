import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import NewAccount from "./components/newAccount/NewAccount";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="newaccount" element={<NewAccount />} />
      <Route path="userprofile" element={<Profile />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Nada in here</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
