import Logo from "../../assets/logo/logo-long.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar navbar-nav navbar-expand-md sticky-top navbar-dark bg-dark">
      <nav className="container">
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav fs-5">
            <li class="nav-item text-uppercase active">
              <a href="#" class="nav-link">
                home
              </a>
            </li>
            <li class="nav-item text-uppercase">
              <a href="#about" class="nav-link">
                about
              </a>
            </li>
            <li class="nav-item text-uppercase">
              <a href="#services" class="nav-link">
                services
              </a>
            </li>
            <li class="nav-item text-uppercase">
              <a href="#portfolio" class="nav-link">
                portfolio
              </a>
            </li>
            <li class="nav-item text-uppercase">
              <a href="#contact" class="nav-link">
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
