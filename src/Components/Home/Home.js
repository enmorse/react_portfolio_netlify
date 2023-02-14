import React from "react";
import "./Home.css";

const Home = () => {
  const sectionSubtitle = {
    background: "#008000",
    backgroundColor: "forestgreen",
    padding: "1.5rem",
    display: "inline-block",
    fontWeight: "900",
    alignSelf: "start",
    gridColumn: "-0.75 / 1",
    gridRow: "2",
    textAlign: "start",
    position: "relative",
    left: "-0.0rem",
    width: "calc(100% + 1.5rem)",
  };

  return (
    <main>
      <article>
        <section className="intro" id="home" style={{ position: "relative" }}>
          <h2 className="section__title section__title--intro">
            Hello, I am <strong>Ernest N. Morse</strong>
          </h2>
          <h6
            className="section__subtitle section__subtitle--intro"
            style={sectionSubtitle}
          >
            Entry Level / Junior Level Front - End Dev
          </h6>
          <img
            src="images/unnamedOne.png"
            alt=""
            className="intro__img"
            height="350"
          />
        </section>
        <article>
          <section>
            <h5 className="h5__title">Education</h5>
            <p className="section__subtitle--about">
              University of Phoenix&#44; San Diego&#44; CA Bachelor of Science
              &#40;BSc&#41; in Information Technology February 2016 &#8211; June
              2020 GPA 3.84 Graduated with a BSc in Information Technology June
              8&#44; 2020
            </p>
          </section>
          <section>
            <h5 className="h5__title">Course Study</h5>
            <p className="section__subtitle--about">
              CompTIA Network+ &#x2022; CompTIA Security+ &#x2022; Database
              Systems &#x2022; Data Structures &#x2022; Effective Project
              Management &#8211; Traditional, Agile, Extreme &#x2022; HTML5
              &#x2022; CSS3 &#x2022; Information Security &#x2022; Java &#x2022;
              Modern Systems Analysis and &#8211; Design &#x2022; Networking
              Essentials &#x2022; Programming Logic and Design &#x2022; Python
              &#x2022; Ruby on Rails &#x2022; SQL &#x2f; NoSQL&#44;
              etc&#x2e;&#44; etc&#x2e;&#x2e;
            </p>
          </section>
          <section>
            <h5 className="h5__title">Skills</h5>
            <p className="section__subtitle--about">
              <strong>PROGRAMMING</strong> <br />
              <br /> &#x2022; <i>Python</i> <br />
              <br />
              <strong>WEB Development</strong> <br />
              <br />
              &#x2022; <i>HTML5 / CSS3 / JavaScript</i>
            </p>
          </section>
          <section>
            <h5 className="h5__title">Awards Certificates</h5>
            <p className="section__subtitle--about">
              Non-Lethal Weapons Initial Certification &#x2022; Heartsaver CPR
              AED &#x2022; Firearms Safety Certification &#x2022; Authorized to
              Carry M9 While Performing Duties as&#58; Patrolman &#x2022; Guard
              &#x2f; Patrolperson Registration &#x2022; Master &#8211; At
              &#8211; Arms &ldquo;A&rdquo; School Diploma &#x2022; ISSA Personal
              Trainer Certification &#x2022; NESTA Personal Trainer
              Certification
            </p>
          </section>
        </article>
      </article>
    </main>
  );
};

export default Home;
