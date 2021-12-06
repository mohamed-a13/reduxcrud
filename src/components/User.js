import React from "react";

const User = ({ user }) => {
  return (
    <div className="user-container">
      <div className="user">
        <h3>{user.pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="user" />
        <p>Age : 35 ans</p>
        <p>
          Like{user.likes > 1 ? "s" : null} : {user.likes}
        </p>
      </div>
    </div>
  );
};

export default User;
