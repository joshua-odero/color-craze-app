import "../styles/Header.css";

import { useNavigate } from "react-router-dom";

function Header({ showBookmark = false }) {

  const navigate = useNavigate();

  // Avatar and name from localStorage

  const avatarSrc =

    localStorage.getItem("avatar") || "/kids_avatars/default.png";

  const playerName =

    localStorage.getItem("name") || "Player";

  const handleLogout = () => {

    navigate("/"); // go back to intro page

  };

  const handleBookmark = () => {

    navigate("/bookmarks");

  };

  return (

    <header className="header">

      {/* GAME TITLE */}

      <div className="game-title-box">

        <h1 className="game-title">Color Craze</h1>

      </div>

      {/* USER INFO + LOGOUT / BOOKMARK BUTTONS */}

      <div className="user-row">

        {/* Avatar + Welcome text + Player Name */}

        <div className="avatar-name">

          {/* avatar */}

          <img src={avatarSrc} alt="avatar" className="avatar" />

          {/* welcome message and player name */}

          <div className="name-welcome">

            <p className="welcome">Welcome</p>

            <p className="name">{playerName}</p>

          </div>

        </div>

        {/* Buttons row */}

        <div className="buttons-row">

          {/* Bookmark button */}

          {showBookmark && (

            <button className="gold-btn bookmark" onClick={handleBookmark}>

              Bookmark

            </button>

          )}

          {/* Logout button */}

          <button className="gold-btn logout" onClick={handleLogout}>

            Logout

          </button>

        </div>

      </div>

    </header>

  );

}

export default Header;

