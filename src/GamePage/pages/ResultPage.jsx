import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import StarResult from "../components/StarResult";
import { saveColor } from "../utils/ColorStorage";

import "../styles/ResultPage.css";

function ResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation(); // receives RGB + avatar + name

  const red = state?.red || 0;
  const green = state?.green || 0;
  const blue = state?.blue || 0;

  // get avatar/name 
  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");

  const resultColor = `rgb(${red}, ${green}, ${blue})`;

  // Reset button
  const handleReset = () => {
    localStorage.removeItem("savedColors");
    navigate("/game", { state: { avatar, name } });
  };

  // Save button saves color + avatar + name to localStorage
  const handleSave = () => {
    saveColor({ color: resultColor, avatar, name });
    alert("Color saved!");
    navigate("/bookmarks");
  };

  return (
    <div
      className="result-page min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background_pics/background_pic2.png')" }}
    >
      <Header showBookmark={true} avatar={avatar} name={name} />

      <div className="result-board">
        <StarResult color={resultColor} />
        <p>The color is {resultColor}</p>

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
