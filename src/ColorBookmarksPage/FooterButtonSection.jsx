import React from "react";
import { useNavigate } from "react-router-dom";

//Function component to render a footer with a button
function FooterButtonSection({ avatar = "/kids_avatars/default.png", name = "Player" }) {
  const navigate = useNavigate();

  // Go to Game Page button handler
  const handleGoToGame = () => {
    navigate("/game", {
      state: {
        avatar,
        name
      }
    });
  };

  return (
    <div className="flex items-center justify-center w-full py-5">
      <button
        onClick={handleGoToGame}
        className="bg-orange-400 rounded-sm w-52 px-3 py-3 font-bold cursor-pointer hover:bg-orange-500 transition"
      >
        Go to Game Page
      </button>
    </div>
  );
}

export default FooterButtonSection; //Export function component

