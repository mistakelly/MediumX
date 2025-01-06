import "@/styles/public/header.scss";

function LandingHeader() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="app_logo">MEDIUMX</h1>
        <ul className="nav__ul">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
          <button className="nav__cta">Get Started</button>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;
