import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

export default function Profile() {
  const { user } = useContext(LoginContext);

  return (
    <div>
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
}
