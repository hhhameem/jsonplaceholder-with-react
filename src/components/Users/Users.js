import React from "react";
import { useEffect, useState } from "react";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div className='container mx-auto my-4'>
      <div className='mx-2 grid grid-cols-1 gap-4 md:grid-cols-3 md:mx-4 lg:grid-cols-3 lg:mx-8'>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
