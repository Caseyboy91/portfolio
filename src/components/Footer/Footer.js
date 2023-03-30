import "./Footer.css";
import Logo2 from "../../assets/logo/logo.png";
import LinkedIn from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/github.svg";
import Email from "../../assets/icons/envelope-fill.svg";
import Copyright from "../../assets/icons/c-circle.svg";
import Person from "../../assets/icons/person.svg";
import Resume from "../../assets/resume/casey-davis-resume.pdf";

const Footer = () => {
  return (
    <footer className="footer sticky-bottom bg-dark text-secondary py-2">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-4 d-flex justify-content-start ">
            <a
              className="img-fluid me-3"
              href="https://www.linkedin.com/in/caseydavis91/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img
                src={LinkedIn}
                className="img-fluid footer-img"
                alt="LinkedIn"
              />
            </a>
            <a
              className="img-fluid me-3 "
              href="https://github.com/Caseyboy91"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={GitHub} className="img-fluid footer-img" alt="GitHub" />
            </a>
            <a
              className="img-fluid me-3 "
              href="mailto:contact@caseyrdavis.com"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={Email} className="img-fluid footer-img" alt="Email" />
            </a>
            <a
              className="img-fluid me-3 "
              href={Resume}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={Person} className="img-fluid footer-img" alt="Resume" />
            </a>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <img
              src={Copyright}
              alt="copyright"
              className="pe-2 img-fluid footer-img"
            />
            <span className="pe-2">2023</span>
            <span className="d-none d-md-inline">Casey Davis</span>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <a href="/">
              <img className="img-fluid logo2" src={Logo2} alt="CD logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
