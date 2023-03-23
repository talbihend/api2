import React from "react";
import {SiGmail} from "react-icons/si"
import {BsFillTelephoneOutboundFill} from "react-icons/bs"
import {FaCity} from "react-icons/fa"


const UserElement = ({ user }) => {
  console.log(user);
  return (
    <div className="element-form">
      {user&&
        <>
        <h1 className="name-form">{user.name}</h1>
        <br/>
        <h2><FaCity className="city-form"/>{user.address.city}</h2>
        <h3><SiGmail className="email-form"/>{user.email}</h3>
        <h3><BsFillTelephoneOutboundFill className="phone-form"/>{user.phone}</h3>
        </>
      }
    </div>
  );
};

export default UserElement;
