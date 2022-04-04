import React from "react";
import { axios } from "axios";
import { register } from "../../api";
import { authState } from "../../recoil/auth/atom";
import { useRecoilValue } from "recoil";
import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    email: "",
    username: "johnd",
    password: "m38rmF$",
    role: "user",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
    },
    phone: "",
  });

  return (
    <div>
      <input
        onChange={(e) =>
          setData({
            ...data,
            username: e.target.value,
          })
        }
        type="username"
        placeholder="username"
        value={data.username}
      />

      <input
        onChange={(e) =>
          setData({
            ...data,
            password: e.target.value,
          })
        }
        type="password"
        placeholder="password"
        value={data.password}
      />

      <input
        onChange={(e) =>
          setData({
            ...data,
            name: { ...data.name, firstname: e.target.value },
          })
        }
        placeholder="first name"
        value={data.name.firstname}
      />
      <input
        onChange={(e) =>
          setData({
            ...data,
            name: { ...data.name, lastname: e.target.value },
          })
        }
        placeholder="last name"
        value={data.name.lastname}
      />
      <input
        onChange={(e) =>
          setData({
            ...data,
            address: { ...data.address, city: e.target.value },
          })
        }
        placeholder="city"
        value={data.address.city}
      />
      <input
        onChange={(e) =>
          setData({
            ...data,
            address: { ...data.address, street: e.target.value },
          })
        }
        placeholder="street"
        value={data.address.street}
      />
      <input
        onChange={(e) =>
          setData({
            ...data,
            address: { ...data.address, number: e.target.value },
          })
        }
        placeholder="number"
        value={data.address.number}
      />
      <input
        onChange={(e) =>
          setData({
            ...data,
            address: { ...data.address, zipcode: e.target.value },
          })
        }
        placeholder="zipcode"
        value={data.address.zipcode}
      />

      <input
        onChange={(e) =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
        type="email"
        placeholder="email"
        value={data.email}
      />

      <input
        onChange={(e) =>
          setData({
            ...data,
            phone: e.target.value,
          })
        }
        type="phone"
        placeholder="phone"
        value={data.phone}
      />
    </div>
  );
}

export default Register;
