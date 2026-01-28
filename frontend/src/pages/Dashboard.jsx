import { useEffect, useState } from "react";
import { request } from "../api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [msg, setMsg] = useState("");

  const loadTasks = async () => {
    const res = await request("/tasks");
    if (res.message) {
      localStorage.clear();
      window.location.href = "/";
    } else {
      setTasks(res);
    }
  };

  const addTask = async () => {
    await request("/tasks", "POST", {
      title: document.getElementById("title").value
    });
    document.getElementById("title").value = "";
    setMsg("Task added");
    loadTasks();
  };

  const delTask = async (id) => {
    await request(`/tasks/${id}`, "DELETE");
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <input id="title" placeholder="New task" />
      <button onClick={addTask}>Add</button>
      <p>{msg}</p>

      <ul>
        {tasks.map(t => (
          <li key={t._id}>
            {t.title}
            <button onClick={() => delTask(t._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
