import React from "react";
import { Link } from "react-router-dom";
import userimage from "../../image/user.jpg";
import "./User.css";

const User = (props) => {
  const { name, id, email } = props.user;
  return (
    <div className='user-detail custom-shadow flex flex-col items-center rounded-lg p-2'>
      <img
        src={userimage}
        alt=''
        className='rounded-full h-40 w-40 text-center mb-4 mt-2'
      />
      <div className='text-center mb-4'>
        <Link to={`/users/${id}`} className='link leading-relaxed'>
          {name}
        </Link>
        <p className='mt-2'>
          <span className='font-bold'>Email</span>: {email}
        </p>
      </div>
    </div>
  );
};

export default User;
