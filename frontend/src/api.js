const API = "http://localhost:5000/api/v1";

export const request = async (url, method = "GET", body) => {
  const token = localStorage.getItem("token");

  const res = await fetch(API + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: body ? JSON.stringify(body) : null
  });

  return res.json();
};
