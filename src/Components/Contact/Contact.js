import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fgifght",
        "template_rbhcmp2",
        form.current,
        "Qe5iL61TxsPbb21V1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          let success = document.getElementById("send__button");
          let contactForm = document.getElementById("contact__form");
          contactForm.reset();
          success.innerHTML = "Succesfully Sent";
          success.style.backgroundColor = "ghostwhite";

          setInterval(() => window.location.reload(true), 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main>
      <article>
        <h2 className="contact__h2 h2__title">Contact Me</h2>
        <br />
        <section>
          <p className="contact__p">
            Please enter your name&#44; email&#44; and message if you wish to
            contact me&#x2e; I have set this contact form up with ReactJS and
            EmailJS &#40;With No Backend Required&#41; so that if and when you
            contact me I will receive an emial indicating your email
            address&#44; your name&#44; and I will be able to read your message
            and respond to your message in kind. You can also contact me through
            any one of the social media links in the footer of my web page&#x2e;
          </p>
          <form
            action="https://http.org.get"
            method="get"
            className="contact__form"
            id="contact__form"
            ref={form}
            onSubmit={sendEmail}
          >
            <fieldset className="contact__fieldset">
              <legend className="offscreen">Send Me A Message</legend>

              <p className="contact__p">
                <label htmlFor="name" className="contact__label">
                  Name:
                </label>
                <input
                  type="text"
                  className="contact__input"
                  name="user_name"
                  id="user_name"
                  placeholder="Your Name Here"
                  autoComplete="on"
                  require
                />
              </p>

              <p className="contact__p">
                <label htmlFor="Your Email" className="contact__lablel">
                  Email:
                </label>
                <input
                  type="email"
                  className="contact__input"
                  name="user_email"
                  id="user_email"
                  placeholder="Your Email Here"
                  autoComplete="on"
                  required
                />
              </p>

              <h3>Send Us A Message</h3>

              <p className="contact__p">
                <label htmlFor="message" className="contact__label">
                  Your Message:
                </label>

                <br />

                <textarea
                  type="text"
                  className="contact__textarea"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message Here"
                ></textarea>
              </p>
            </fieldset>
            <button
              className="contact__button"
              id="send__button"
              type="submit"
              value="Send"
              style={{
                color: "forestgreen",
                backgroundColor: "rgb(34, 34, 34)",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </section>
      </article>
    </main>
  );
};

export default Contact;
