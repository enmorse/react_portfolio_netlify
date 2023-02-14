import React from "react";
import { useState } from "react";
import pictureList from "../../hooks/data";
import ImageSlider from "../ImageSlider/ImageSlider";
import "./About.css";

const About = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < pictureList.length - 1;

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let picture = pictureList[index];

  const nextButton = {
    color: "forestgreen",
    backgroundColor: "rgb(34, 34, 34)",
    cursor: "pointer",
  };

  const prevButton = {
    color: "forestgreen",
    backgroundColor: "rgb(34, 34, 34)",
    cursor: "pointer",
  };

  const showDetailsButton = {
    color: "forestgreen",
    backgroundColor: "rgb(34, 34, 34)",
    cursor: "pointer",
  };

  const containerStyles = {
    width: "620",
    height: "425",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justtifyContent: "center",
    alignItems: "center",
  };

  return (
    <main>
      <article>
        <h2 className="h2__title">About Me</h2>
        <br />
        <section>
          <p>
            I Enjoy Building Websites &#x2f; Coding &#x2f; Programming &#x2022;
            Exercising &#x2f; Weightlifting&#44; Sports&#58; Baseball&#44;
            Football&#44; and Golf &#x2022; D&D &#40;Dungeons & Dragons&#41; &#x2022; Learning And Playing
            Guitar &#x2022; LARP &#40;MES&#44; Vampire the Masquerade&#41;
            &#x2022; Marvel &#x2022; MtG &#40;Magic the Gathering&#41; &#x2022;
            Reading &#x2022; and the SCA &#40;Society of Creative
            Anachronism&#41;
          </p>
        </section>
        <section className="portfolio">
          <h6 className="h6__title" style={{ margin: "0.25rem" }}>
            Pictures
          </h6>
          <button
            className="contact__button next__button"
            style={nextButton}
            onClick={handleNextClick}
            disabled={!hasNext}
          >
            Next
          </button>
          <button
            className="contact__button prev__button"
            style={prevButton}
            onClick={handlePrevClick}
            disabled={!hasPrev}
          >
            Previous
          </button>
          <h6 className="picture__title">
            <i>{picture.name} </i>
            by {picture.author}
          </h6>
          <p className="picture__length">
            ({index + 1} of {pictureList.length})
          </p>
          <button
            className="contact__button show__details"
            style={showDetailsButton}
            onClick={handleMoreClick}
          >
            {showMore ? "Hide" : "Show"} details
          </button>
          {showMore && <p className="show__paragraph">{picture.description}</p>}
          <a href="#" className="portfolio__item">
            <img
              src={picture.url}
              alt={picture.alt}
              width="620"
              height="425"
              className="portfolio__img pictures"
            />
          </a>
        </section>
      </article>
      <article style={containerStyles}>
        <section>
          <ImageSlider />
        </section>
      </article>
    </main>
  );
};

export default About;
