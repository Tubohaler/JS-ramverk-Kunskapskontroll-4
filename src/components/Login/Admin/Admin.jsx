import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { getAllUsers } from "../../../api";
import { productsState } from "./../../../stores/products/atom";

function Admin() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const products = useRecoilValue(productsState);
  if (null) return <div>loading...</div>;

  return (
    <div>
      {users.length === 0
        ? "Loading Users..."
        : users.map((user) => {
            return (
              <div key={`user-${user.id}`}>
                id: {user.id} - username: {user.username}
              </div>
            );
          })}

      {products.length === 0
        ? "Loading..."
        : products.map((product) => {
            return (
              <div key={`user-${product.id}`}>
                id: {product.id} - {product.title}
              </div>
            );
          })}
    </div>
  );
}

export default Admin;
