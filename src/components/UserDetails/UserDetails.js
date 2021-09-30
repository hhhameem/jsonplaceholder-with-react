import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserDetails = () => {
  const { UserId } = useParams();
  const [userData, setUserData] = useState({});
  const { name, email, phone, website } = userData;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${UserId}`
      );
      const data = await response.json();
      setUserData(data);
    }
    fetchData();
  }, [UserId]);

  return (
    <div>
      <h3>My name is: {name}</h3>
      <h3>My name is: {email}</h3>
      <h3>My name is: {phone}</h3>
      <h3>My name is: {website}</h3>
      <h3>My name is: {userData.address?.city}</h3>
    </div>
  );
};

export default UserDetails;
