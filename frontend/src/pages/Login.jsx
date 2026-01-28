import { useState } from "react";
import { request } from "../api";

export default function Login() {
  const [msg, setMsg] = useState("");

  const submit = async () => {
    const res = await request("/auth/login", "POST", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    });

    if (res.token) {
      localStorage.setItem("token", res.token);
      window.location.href = "/dashboard";
    } else {
      setMsg(res.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input id="email" placeholder="Email" /><br/>
      <input id="password" placeholder="Password" /><br/>
      <button onClick={submit}>Login</button>
      <p>{msg}</p>
    </div>
  );
}
