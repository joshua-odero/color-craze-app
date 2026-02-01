import React from "react";
import { useNavigate } from "react-router-dom";

function UserNavBarSection() {
  const navigate = useNavigate();

  //  Get Avatar and Name from local storage
  const avatar = localStorage.getItem("avatar") || "/kids_avatars/default.png";
  const name = localStorage.getItem("name") || "Player";

  const handleLogout = () => {
    navigate("/"); // back to Intro Page
  };

  return (
    <div className="flex items-center justify-center w-full py-5 gap-x-2">
      <div className="bg-white w-12 h-12 rounded-full p-1">
        <img src={avatar} alt="kid_avatar" className="rounded-full w-full h-full" />
      </div>

      <div className="flex items-center justify-center bg-white font-bold px-3 py-1 rounded">
        Welcome, {name}
      </div>

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
