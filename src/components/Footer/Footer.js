import "./Footer.css";
import Logo4 from "../../assets/logo/logo4.png";
import LinkedIn from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/github.svg";
import Email from "../../assets/icons/envelope-fill.svg";
import Copyright from "../../assets/icons/c-circle.svg";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-4 d-flex justify-content-start ">
            <a
              className="img-fluid me-3 icon"
              href="https://www.linkedin.com/in/caseydavis91/"
              target={"_blank"}
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              className="img-fluid me-3 icon"
              href="https://github.com/Caseyboy91"
              target={"_blank"}
            >
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              className="img-fluid me-3 icon"
              href="mailto:contact@caseyrdavis.com"
              target={"_blank"}
            >
              <img src={Email} alt="Email" />
            </a>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <img src={Copyright} alt="copyright" className="pe-2" />
            <span className="pe-2">2023</span>
            <span className="d-none d-md-inline">Casey Davis</span>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <a href="/">
              <img className="img-fluid logo2" src={Logo4} alt="CD logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
