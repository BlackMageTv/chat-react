import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserDetails from "../DetallesUsuario/UserDetails";
import ImageSelector from "../selectorimagen/ImageSelector";

const UserProfileApp = () => {
  return (
    <div className="user-profile-container">
      <Sidebar />
      <UserDetails />
      <ImageSelector />
    </div>
  );
};

export default UserProfileApp;
