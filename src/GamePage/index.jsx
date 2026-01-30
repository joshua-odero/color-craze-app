import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ColorShape from "../components/ColorShape";
import ColorSlider from "../components/ColorSlider";
import DropZone from "../components/DropZone";

import "../styles/GamePage.css";


function GamePage() {
  const navigate = useNavigate(); 

  // Stores the colors that have been dropped 
  const [selectedColors, setSelectedColors] = useState([]);

  // Stores the RGB values of the selected colors
  const [rgb, setRgb] = useState({ red: 0, green: 0, blue: 0 });

  // Called when a color is dropped in DropZone
  const handleDrop = (color) => {
    // Only allow up to 2 colors and prevent duplicates
    if (selectedColors.length < 2 && !selectedColors.includes(color)) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  // Called when user clicks Mix button
  const handleMix = () => {
    // Navigate to ResultPage and pass RGB state
    navigate("/result", { state: rgb });
  };

  return (
    <div className="game-page">
      {/* Header with game title, avatar, name, buttons */}
      <Header />

      <div className="game-board">
        {/* Row of color shapes with their sliders */}
        <div className="shapes-row">

          {/* RED shape + slider */}
          <div className="shape-slider">
            <ColorShape color="red" shape="circle" />
            <ColorSlider
              value={rgb.red} // current red value
              disabled={!selectedColors.includes("red")} // activate slider only if red selected
              onChange={(value) => setRgb({ ...rgb, red: value })} // update red value
            />
          </div>

          {/* GREEN shape + slider */}
          <div className="shape-slider">
            <ColorShape color="green" shape="triangle" />
            <ColorSlider
              value={rgb.green}
              disabled={!selectedColors.includes("green")}
              onChange={(value) => setRgb({ ...rgb, green: value })}
            />
          </div>

          {/* BLUE shape + slider */}
          <div className="shape-slider">
            <ColorShape color="blue" shape="square" />
            <ColorSlider
              value={rgb.blue}
              disabled={!selectedColors.includes("blue")}
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

