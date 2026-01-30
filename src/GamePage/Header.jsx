import "../styles/Header.css";

function Header({ showBookmark = false }) {
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
          {/* Avatar placeholder */}
          <img
            src="https://via.placeholder.com/60"
            alt="avatar"
            className="avatar"
          />

          {/* Welcome message and player name placeholders */}
          <div className="name-welcome">
            <p className="welcome">Welcome</p>
            <p className="name">Player Name</p>
          </div>
        </div>

        {/* Buttons row */}
        <div className="buttons-row">
          {/* Bookmark button only shows on ResultPage */}
          {showBookmark && (
            <button className="gold-btn bookmark">Bookmark</button>
          )}
          {/* Logout button */}
          <button className="gold-btn logout">Logout</button>
        </div>
      </div>

    </header>
  );
}

export default Header; 



