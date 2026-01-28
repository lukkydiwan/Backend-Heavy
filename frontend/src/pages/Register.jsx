import { useState } from "react";
import { request } from "../api";

export default function Register() {
  const [msg, setMsg] = useState("");

  const submit = async () => {
    const res = await request("/auth/register", "POST", {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    });
    setMsg(res.message || "Registered successfully");
  };

  return (
    <div>
      <h2>Register</h2>
      <input id="name" placeholder="Name" /><br/>
      <input id="email" placeholder="Email" /><br/>
      <input id="password" placeholder="Password" /><br/>
      <button onClick={submit}>Register</button>
      <p>{msg}</p>
    </div>
  );
}
