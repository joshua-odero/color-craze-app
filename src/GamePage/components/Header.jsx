import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

function Header({ showBookmark = false, avatar = "/kids_avatars/default.png", name = "Player" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // go back to intro page
  };

  const handleBookmark = () => {
    navigate("/bookmarks", { state: { avatar, name } }); // pass avatar + name to bookmarks page
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
          {/* Dynamic avatar */}
          <img
            src={avatar}
            alt="avatar"
            className="avatar"
          />

          {/* Dynamic welcome message and player name */}
          <div className="name-welcome">
            <p className="welcome">Welcome</p>
            <p className="name">{name}</p>
          </div>
        </div>

        {/* Buttons row */}
        <div className="buttons-row">
          {/* Bookmark button only shows on ResultPage */}
          {showBookmark && (
            <button
              className="gold-btn bookmark"
              onClick={handleBookmark}
            >
              Bookmark
            </button>
          )}
          {/* Logout button */}
          <button
            className="gold-btn logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
