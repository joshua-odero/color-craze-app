import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import StarResult from "../components/StarResult";
import "../styles/ResultPage.css";

function ResultPage() {
  const navigate = useNavigate(); 
  const { state } = useLocation(); // get RGB data passed from GamePage

  // Convert RGB values into CSS rgb string
  const resultColor = `rgb(${state.red}, ${state.green}, ${state.blue})`;

  // Reset button
  const handleReset = () => {
    navigate("/"); 
  };

  // Save button
  const handleSave = () => {
    navigate("/"); 
  };

  return (
    <div className="result-page">
      <Header showBookmark={true} />

      <div className="result-board">
        <StarResult color={resultColor} />

        <p>The color is {resultColor}</p>

        {/* Reset + Save buttons */}
        <div className="buttons">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSave}>Save this color</button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage; 
