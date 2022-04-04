import axios from "axios";

export async function login(username, password) {
  const data = await axios.post("https://k4backend.osuka.dev/auth/login", {
    username: username,
    password: password,
  });

  return data.data;
}

export async function register() {
  const res = await axios.post("https://k4backend.osuka.dev/users", {
    email: "John@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    role: "user",
    name: {
      firstname: "John",
      lastname: "Doe",
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
    },
    phone: "1-570-236-7033",
  });

  console.log(res);
}

export async function admin(username, password) {
  const wtf = await axios.post("https://k4backend.osuka.dev/auth/login", {
    username: username,
    password: password,
  });
  return wtf.data;
}

export async function getAllUsers() {
  const users = await axios.get("https://k4backend.osuka.dev/users");
  return users.data;
}

export async function getUserById(id) {
  const res = await axios.get(`https://k4backend.osuka.dev/users/${id}`);
  return res.data;
}
