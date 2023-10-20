import React, { useState } from "react";
import axios from "axios"

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleGenerateToken = async () => {
    const response = await axios.request("http://localhost:4000/Generate_Token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, password }),
    });
    console.log("Response", response.data)
    setToken(response.data.token);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>
          Login:
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleGenerateToken}>Generate Token</button>
      {token && <div>Generated Token: {token}</div>}
    </div>
  );
}

export default Login;
