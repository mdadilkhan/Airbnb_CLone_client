import React from "react";
import avatar from '../assets/Avatar.jpeg'
const Avatar = () => {
  return (
    <img
      src={avatar}
      alt="Avatar"
      className="rounded-full"
      height="30"
      width="30"
    ></img>
  );
};

export default Avatar;
