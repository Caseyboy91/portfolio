import GitHub from "../../assets/icons/github.svg";

const Portfolio = () => {
  return (
    <section className="container min-vh-100 py-3">
      <div className="row">
        <div className="col">
          <div>
            <h1>Portfolio</h1>
            <hr />
          </div>
        </div>
      </div>
      {/* start of carousel */}
      <div class="row pt-5 align-items-center">
        <div className="col-md-4 pb-5">
          <div>
            <h2>Runnit</h2>
          </div>

          <p className="lead fs-5">
            Similar to services like DoorDash, Uber Eats, and Postmates, Runnit
            will deliver drinks, snacks, and merch directly to your seat so you
            don't have to leave your favorite show, concert, or event.
          </p>
          <p className="lead fs-6">
            This app was built as my Capstone project at BrainStation using
            React, Axios, Express, Node, Bootstrap, Sass, and Stripe.
          </p>
          <p className="fs-6 d-flex justify-content-center lead text-secondary border border-secondary rounded">
            - Watch the demo video on slide 3 -
          </p>
          <div className="col d-flex justify-content-center ">
            <a
              className="text-decoration-none text-reset img-fluid me-3"
              href="https://github.com/Caseyboy91/runnit"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <p className="mb-0">Client</p>
              <img className="ms-2 w-50" src={GitHub} alt="Client" />
            </a>
            <a
              className="text-decoration-none text-reset img-fluid me-3"
              href="https://github.com/Caseyboy91/runnit-api"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <p className="mb-0">Server</p>
              <img className="ms-2 w-50" src={GitHub} alt="Server" />
            </a>
          </div>
        </div>
        <div class="col-md-8">
          <div
            id="slides-with-controls"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/rhrVMuZ.png"
                  alt="runnit"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/P6wzt3J.png"
                  alt="runnit screenshots"
                />
              </div>
              <div class="carousel-item ">
                <a
                  href="https://www.loom.com/share/ba27565872f64797a2e69f2a3077779b"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <img
                    class="d-block w-100"
                    src="https://i.imgur.com/ZptmT6g.png"
                    alt="runnit video link"
                  />
                </a>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#slides-with-controls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#slides-with-controls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <hr />
      </div>

      {/* DP Events */}
      <div class="row pt-5 align-items-center d-flex flex-row-reverse ">
        <div className="col-md-4 pb-5">
          <div>
            <h2>Diane Pugmire Events</h2>
          </div>

          <p className="lead">
            Diane Pugmire Events - DP Events, is a full-service wedding and
            event planning business. This client was looking for a modern and
            sleak update to her brand.
          </p>

          <p className="lead fs-6">
            This app was built and designed using React, Bootstrap, and Emailjs.
          </p>
          <p className="fs-6 d-flex justify-content-center lead text-secondary border border-secondary rounded">
            - Check out the code and website -
          </p>
          <div className="col d-flex justify-content-center ">
            <a
              className="text-decoration-none text-reset img-fluid me-3"
              href="https://github.com/Caseyboy91/dpevents"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <p className="mb-0">Client</p>
              <img className="ms-2 w-50" src={GitHub} alt="Client" />
            </a>
          </div>
        </div>
        <div class="col-md-8">
          <div
            id="slides-with-controls2"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/NLo5wLe.png"
                  alt="ham it up"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/SRXsQTj.png"
                  alt="ham it up cards"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/qqpInNR.png"
                  alt="card info"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#slides-with-controls2"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#slides-with-controls2"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <hr />
      </div>

      {/* Ham It Up */}
      <div class="row pt-5 align-items-center d-flex">
        <div className="col-md-4 pb-5">
          <div>
            <h2>Ham It Up</h2>
          </div>

          <p className="lead">
            Having your favorite Broadway Show at your fingertips has never been
            easier than with Ham It Up.
          </p>

          <p className="lead fs-6">
            This app was built during a hackathon at BrainStation as an exercise
            in paired-programming. We designed a prototype using React, Sass,
            Axios, and JSON.
          </p>
          <p className="fs-6 d-flex justify-content-center lead text-secondary border border-secondary rounded">
            - Check out the code -
          </p>
          <div className="col d-flex justify-content-center ">
            <a
              className="text-decoration-none text-reset img-fluid me-3"
              href="https://github.com/Caseyboy91/ham-it-up"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <p className="mb-0">Client</p>
              <img className="ms-2 w-50" src={GitHub} alt="Client" />
            </a>
          </div>
        </div>
        <div class="col-md-8">
          <div
            id="slides-with-controls2"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/NLo5wLe.png"
                  alt="ham it up"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/SRXsQTj.png"
                  alt="ham it up cards"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/qqpInNR.png"
                  alt="card info"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#slides-with-controls2"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#slides-with-controls2"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <hr />
      </div>

      {/* Air Canada */}
      <div class="row py-5 align-items-center flex-row-reverse ">
        <div className="col-md-4 pb-5">
          <div>
            <h2>Industry Project</h2>
          </div>

          <p className="lead fs-5">
            I had the chance to work across cohorts (UX/UI, Data Science,
            Software Engineers) at BrainStation to build a prototype website for
            Air Canada. We were tasked with a problem to design a solution to
            increase user experience and utilization on Air Canada's Aeroplans.
          </p>
          <p className="lead fs-6">
            This app was built using React, Node, JavaScript, and Sass.
          </p>
        </div>
        <div class="col-md-8">
          <div
            id="slides-with-controls3"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/seOFe3S.png"
                  alt="air canada industry project screenshots"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/kqAvRP0.png"
                  alt="air canada industry project screenshots"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/Nh0ORxa.png"
                  alt="air canada industry project screenshots certificate"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#slides-with-controls3"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#slides-with-controls3"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Portfolio;
