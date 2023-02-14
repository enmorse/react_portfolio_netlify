import React from "react";
import { useState } from "react";
import pictureList from "../../hooks/data";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  let img = pictureList[index];

  const handleNextClick = () => {
    const isLastSlide = index === pictureList.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };

  const handlePrevClick = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? pictureList.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    width: "620",
    height: "425",
    margin: "0 auto",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url(${img.url})`,
  };

  const imgStyles = {
    borderRadius: "10px",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "2rem",
    fontSize: "3rem",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "2rem",
    fontSize: "3rem",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    flexDirection: "row",
    justtifyContent: "center",
    alignItems: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToSlide = (pictureIndex) => {
    setIndex(pictureIndex);
  };

  return (
    <div className="slider__styles" style={sliderStyles}>
      <div
        className="left__arrow-styles"
        stlye={leftArrowStyles}
        onClick={handlePrevClick}
      >
        «
      </div>
      <div
        className="right__arrow-styles"
        stlye={rightArrowStyles}
        onClick={handleNextClick}
      >
        »
      </div>
      <div className="slide__styles" style={slideStyles}>
        <img
          src={img.url}
          alt={img.alt}
          className="img__styles portfolio__img pictures"
          width="620"
          height="425"
          style={imgStyles}
        />
      </div>
      <div className="dots__Container-Styles" style={dotsContainerStyles}>
        {pictureList.map((picture, pictureIndex) => (
          <div
            key={pictureIndex}
            style={dotStyles}
            onClick={() => goToSlide(pictureIndex)}
          >
            ⚪
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
