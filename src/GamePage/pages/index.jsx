import { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import Header from "../components/Header";

import ColorShape from "../components/ColorShape";

import ColorSlider from "../components/ColorSlider";

import DropZone from "../components/DropZone";

import "../styles/GamePage.css";

function GamePage() {

  const navigate = useNavigate();

// Get avatar name and profile from localStorage

  const selectedAvatar = localStorage.getItem("avatar") || "/kids_avatars/default.png";

  const selectedName = localStorage.getItem("name") || "Player";

   // Stores the colors that have been dropped

  const [selectedColors, setSelectedColors] = useState([]);

  // Stores the RGB values of the selected colors

  const [rgb, setRgb] = useState({ red: 0, green: 0, blue: 0 });

  // Called when a color is dropped in DropZone

  const handleDrop = (color) => {

    if (selectedColors.length < 2 && !selectedColors.includes(color)) {

      setSelectedColors([...selectedColors, color]);

    }

  };

  // Called when user clicks Mix button

  const handleMix = () => {

    navigate("/result", {

      state: { ...rgb, avatar: selectedAvatar, name: selectedName }

    });

  };

  return (

    <div

      className="game-page min-h-screen bg-cover bg-center"

      style={{ backgroundImage: "url('/background_pics/background_pic2.png')" }}

    >

      {/* Header with game title, avatar, name, buttons */}

      <Header showAvatar={true} avatar={selectedAvatar} name={selectedName} />

      <div className="game-board">

        {/* Row of color shapes with their sliders */}

        <div className="shapes-row">

          {/* RED shape + slider */}

          <div className="shape-slider">

            <ColorShape color="red" shape="circle" />

            <ColorSlider

              value={rgb.red}

              onChange={(value) => setRgb({ ...rgb, red: value })}

            />

          </div>

          {/* GREEN shape + slider */}

          <div className="shape-slider">

            <ColorShape color="green" shape="triangle" />

            <ColorSlider

              value={rgb.green}

              onChange={(value) => setRgb({ ...rgb, green: value })}

            />

          </div>

          {/* BLUE shape + slider */}

          <div className="shape-slider">

            <ColorShape color="blue" shape="square" />

            <ColorSlider

              value={rgb.blue}

              onChange={(value) => setRgb({ ...rgb, blue: value })}

            />

          </div>

        </div>

        {/* Drop zone to receive colors */}

        <DropZone onDrop={handleDrop} />

        {/* Mix button */}

        <button

          className="mix-btn"

          onClick={handleMix}

          disabled={selectedColors.length !== 2}

        >

          Mix

        </button>

      </div>

    </div>

  );

}

export default GamePage;
