import "./Footer.css";
import Logo7 from "../../assets/logo/logo7.png";
import LinkedIn from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/github.svg";
import Email from "../../assets/icons/envelope-fill.svg";
import Copyright from "../../assets/icons/c-circle.svg";
import Person from "../../assets/icons/person.svg";
import Resume from "../../assets/resume/resume-2-24-23.pdf";

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-4 d-flex justify-content-start ">
            <a
              className="img-fluid me-3"
              href="https://www.linkedin.com/in/caseydavis91/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a
              className="img-fluid me-3 "
              href="https://github.com/Caseyboy91"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={GitHub} alt="GitHub" />
            </a>
            <a
              className="img-fluid me-3 "
              href="mailto:contact@caseyrdavis.com"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={Email} alt="Email" />
            </a>
            <a
              className="img-fluid me-3 "
              href={Resume}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img src={Person} alt="Resume" />
            </a>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <img src={Copyright} alt="copyright" className="pe-2" />
            <span className="pe-2">2023</span>
            <span className="d-none d-md-inline">Casey Davis</span>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <a href="/">
              <img className="img-fluid logo2" src={Logo7} alt="CD logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
