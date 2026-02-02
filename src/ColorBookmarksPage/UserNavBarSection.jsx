import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

//function component to render navbar section which contains the player's profile picture and the logout button
function UserNavBarSection() {
  const navigate = useNavigate();
  const { state } = useLocation(); // receive avatar + name from previous page
  const avatar = state?.avatar || "/kids_avatars/default.png";
  const name = state?.name || "Player";

  // Logout button handler
  const handleLogout = () => {
    navigate("/"); // go back to Intro Page
  };

  return (
    <div className="flex items-center justify-center w-full py-5 gap-x-2">
      {/* Avatar */}
      <div className="bg-white w-12 h-12 rounded-full p-1">
        <img src={avatar} alt="kid_avatar" className="rounded-full w-full h-full" />
      </div>

      {/* Name */}
      <div className="flex items-center justify-center bg-white font-bold px-3 py-1 rounded">
        Welcome, {name}
      </div>

      {/* Logout button */}
      <div className="flex items-center justify-center">
        <button
          onClick={handleLogout}
          className="bg-orange-400 rounded-sm w-28 px-3 py-1 font-bold cursor-pointer hover:bg-orange-500 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserNavBarSection;
