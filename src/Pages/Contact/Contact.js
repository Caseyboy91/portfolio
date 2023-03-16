import emailjs from "emailjs-com";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    alert("Email Sent");
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    emailjs
      .sendForm(
        "service_cnoa1ll",
        "template_ls5173n",
        e.target,
        "40_UwGHooSaIkDLIy"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // Calendly.initInlineWidget({
  //   url: "https://calendly.com/crsoftwareengineering/meet-with-casey?back=1&month=2023-03",
  //   parentElement: document.getElementById("calendly"),
  //   prefill: {},
  //   utm: {},
  // });

  // Access Key: eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjc4OTI5NTc5LCJqdGkiOiI4MjVlYzQ1MS03ODBjLTQ4MDAtYjZjOC1hMzgxODY3YzgyNjQiLCJ1c2VyX3V1aWQiOiIyZTQ5ZDRhMC1hZGY1LTQ5MTUtOWIyZi1lNDIxZjg5NmY2ZDcifQ.ieM8ZCE9wh0pO-fXEVVoTL9RU3uaR5_dnaXdtv528Z2ejRdCKz5n2oX0a-SFjFoqfPrST4SgTEUkPSX_8UbDdw

  return (
    <section className="container align-items-center min-vh-100 py-3">
      <div className="row ">
        <div className="col  ">
          <div>
            <h1>Contact</h1>
            <hr />
          </div>
        </div>
      </div>
      <form className="row g-3" onSubmit={sendEmail}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="emailInfo" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="emailInfo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <div className="col ">
          <button type="submit" className="btn btn-secondary me-3">
            Send Email
          </button>
          <a
            href="https://calendly.com/crsoftwareengineering"
            className="btn btn-secondary"
            target={"_blank"}
            rel={"noreferrer"}
          >
            Book Appointment On Calendly
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
