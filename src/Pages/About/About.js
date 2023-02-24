import Headshot from "../../assets/headshot/headshot.jpg";
import Resume from "../../assets/resume/resume-2-24-23.pdf";

const About = () => {
  return (
    <main className="container vh-100 py-3">
      <div className="row align-items-lg-center pb-4">
        <div className="col-md-4 ">
          <div className="d-md-none ">
            <h1>About</h1>
            <hr />
          </div>
          <figure className="figure text-center mt-md-5 pt-md-3 ">
            <img
              className="figure-img img-fluid rounded shadow"
              src={Headshot}
              alt="Casey Davis"
            />
            <figcaption className="figure-caption fs-3 mt-3 text-light">
              - Casey Davis -
            </figcaption>
            <figcaption className="figure-caption mt-3 ">
              <a
                className="text-decoration-none text-light btn border border-secondary rounded "
                href={Resume}
                target={"_blank"}
                rel={"noreferrer"}
              >
                - Resume -
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="col-md-8 ">
          <div className="d-none d-md-inline">
            <h1>About</h1>
            <hr></hr>
          </div>

          <p className="lead">
            After a successful decade in finance and entrepreneurship, I have
            made a bold career move and transitioned into software engineering.
            My journey began during my time as a Corporate Trainer, where I
            worked closely with IT and Quality Assurance to build a new UX/UI
            for loan and membership applications, gaining valuable insight into
            the intricacies of web development and software engineering.
          </p>
          <p className="lead">
            As a Client Success Partner, I became increasingly fascinated by the
            transformative power of technology and the endless possibilities it
            presents. This sparked a newfound passion, and I took it upon myself
            to independently learn the basics of HTML, CSS, and Javascript
            through Udemy courses. However, I soon realized that having an
            instructor and a supportive team to collaborate with could make a
            world of difference.
          </p>
          <p className="lead">
            Enter the Software Engineer Bootcamp at BrainStation, where I have
            immersed myself in the latest technology languages and platforms,
            including HTML5, Javascript, React.js, and Express.js. Armed with
            these cutting-edge tools, I am eager to make my mark in the world of
            software engineering and web development, leveraging my unique
            background and leadership skills to drive meaningful change.
          </p>
          <p className="lead">
            My hunger for knowledge and growth doesn't stop there. I am always
            seeking out new education opportunities, engaging in
            thought-provoking conversations, and seeking mentorship from those
            who share my passion. Whether you're interested in discussing
            potential opportunities or simply want to chat about your latest
            binge-worthy show, I would love to hear from you. So don't hesitate
            to reach out directly!
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
