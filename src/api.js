import axios from "axios";

export async function login(username, password) {
  const data = await axios
    .post("https://k4backend.osuka.dev/auth/login", {
      username: "mor_2314",
      password: "83r5^_",
    })
    .then((res) => res);

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
