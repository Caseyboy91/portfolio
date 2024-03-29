import Logo from "../../assets/logo/logo6.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar navbar-expand-md sticky-top">
      <div className="container ">
        <a className="navbar-brand" href="/">
          <img className="img-fluid logo" src={Logo} alt="Casey Davis logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="/" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="/portfolio" class="nav-link">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a href="/contact" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
