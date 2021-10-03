import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./UserDetails.css";
import userimage from "../../image/user.jpg";

const UserDetails = () => {
  let history = useHistory();
  const { UserId } = useParams();
  const [userData, setUserData] = useState({});
  const { name, username, phone, website } = userData;

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

  function btnClickHandler() {
    history.push("/users");
  }

  return (
    <div className='my-4 mx-2 md:mx-4'>
      <div className='user-detail custom-shadow flex flex-col items-center rounded-lg p-2 md:flex-row justify-center'>
        <img
          src={userimage}
          alt=''
          className='user-image rounded-full h-40 w-40 text-center mb-4 md:mx-12 md:my-8'
        />
        <div className='text-center mb-4'>
          <table class='table-auto mx-auto'>
            <tbody>
              <tr className=' border-b-2 border-red-600'>
                <td class='w-3/12 text-left'>
                  <span className='font-bold'>Name</span>:{" "}
                </td>
                <td class='w-9/12 text-right'>{name}</td>
              </tr>
              <tr className=' border-b-2 border-red-600'>
                <td class='w-3/12 text-left'>
                  <span className='font-bold'>Username</span>:{" "}
                </td>
                <td class='w-9/12 text-right'>{username}</td>
              </tr>
              <tr className=' border-b-2 border-red-600'>
                <td class='w-3/12 text-left'>
                  <span className='font-bold'>Phone</span>:{" "}
                </td>
                <td class='w-9/12 text-right'>{phone}</td>
              </tr>
              <tr className=' border-b-2 border-red-600'>
                <td class='w-3/12 text-left'>
                  <span className='font-bold'>Website</span>:{" "}
                </td>
                <td class='w-9/12 text-right'>{website}</td>
              </tr>
              <tr className=' border-b-2 border-red-600'>
                <td class='w-3/12 text-left'>
                  <span className='font-bold'>Workplace</span>:{" "}
                </td>
                <td class='w-9/12 text-right'>
                  {userData.company?.name || "none"}
                </td>
              </tr>
              <tr>
                <td class='w-3/12 text-left'>
                  <span className='font-bold'>Address</span>:{" "}
                </td>
                <td class='w-9/12 text-right'>
                  {userData.address?.suite}, {userData.address?.street},
                  {userData.address?.city}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='btn' onClick={btnClickHandler}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
