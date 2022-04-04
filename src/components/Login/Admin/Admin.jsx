import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { login } from "../../../api";
import { authState } from "../../../recoil/auth/atom";

function Admin() {
  const [auth, setAuth] = useRecoilState(authState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin() {
    const data = await login(username, password);
    console.log(data);

    setAuth({ ...auth, admin: data });
    navigate("/admin");
  }

  return (
    <div>
      <h2>Logga in</h2>

      <div>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Logga in</button>
      </div>
    </div>
  );
}

export default Admin;
