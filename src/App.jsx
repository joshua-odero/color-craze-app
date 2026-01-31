
import { Routes, Route } from "react-router-dom";

import IntroPage from "./IntroPage";
import ProfilesPage from "./ProfilesPage";
import GamePage from "./GamePage/pages";
import ResultPage from "./GamePage/pages/ResultPage";
import ColorBookmarksPage from "./ColorBookmarksPage";

function App() {
  return (
    <Routes>
      {/* Intro / landing page */}
      <Route path="/" element={<IntroPage />} />

      {/* Avatar + name selection */}
      <Route path="/profiles" element={<ProfilesPage />} />

      {/* Game */}
      <Route path="/game" element={<GamePage />} />

      {/* Result after mixing */}
      <Route path="/result" element={<ResultPage />} />

      {/* Saved colors */}
      <Route path="/bookmarks" element={<ColorBookmarksPage />} />
    </Routes>
  );
}

export default App;






