import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

export default function Login() {
  const { setUser, setShowProfile } = useContext(LoginContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>     
      <input
        type="text"
        placeholder="Enter username..."
        name="username"
        required
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        placeholder="Enter email..."
        name="email"
        required
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password..."
        name="password"
        required
        onChange={handleChange}
      />
      <br />
      <button
        type="click"
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </div>
  );
}
