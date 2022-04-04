import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getUserById, login } from "../../api";
import { authState } from "../../recoil/auth/atom";

function Login() {
  const setAuth = useSetRecoilState(authState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const data = await login(username, password);
    console.log(data);

    const userData = await getUserById(data.userId);
    console.log(userData);

    setAuth({ token: data.token, user: userData });
    navigate("/");
  }

  return (
    <div>
      <h2>Logga in</h2>

      <form onSubmit={handleLogin}>
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
        <button>Logga in</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" title="To Signup Page">
          Sign up here!
        </Link>
      </p>
    </div>
  );
}

export default Login;
