import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import StarResult from "../components/StarResult";

import "../styles/ResultPage.css";

function ResultPage() {
  const navigate = useNavigate(); 
  const { state } = useLocation(); // receives RGB + avatar + name
  const red = state?.red || 0;
  const green = state?.green || 0;
  const blue = state?.blue || 0;
  const avatar = state?.avatar || "/kids_avatars/default.png";
  const name = state?.name || "Player";

  const resultColor = `rgb(${red}, ${green}, ${blue})`;

  // Reset button goes back to Game Page with avatar and name preserved
  const handleReset = () => {
    navigate("/game", { state: { avatar, name } });
  };

  // Save button saves color + avatar + name to localStorage
  const handleSave = () => {
    const savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    
    savedColors.push({ color: resultColor, avatar, name });

    localStorage.setItem("savedColors", JSON.stringify(savedColors));

    alert("Color saved!");

    navigate("/bookmarks", { state: { avatar, name } });
  };

  return (
    <div
      className="result-page min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background_pics/background_pic2.png')" }}
    >
      <Header showAvatar={true} avatar={avatar} name={name} />

      <div className="result-board">
        <StarResult color={resultColor} />

        <p>The color is {resultColor}</p>

        {/* Reset + Save buttons */}
        <div className="buttons flex gap-3">
          <button
            onClick={handleReset}
            className="bg-gray-200 px-4 py-2 rounded font-bold"
          >
            Reset
          </button>
          <button
            onClick={handleSave}
            className="bg-yellow-400 px-4 py-2 rounded font-bold"
          >
            Save this color
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
