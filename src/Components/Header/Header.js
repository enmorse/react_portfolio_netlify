import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import useWindowSize from "../../hooks/useWindowSize";
import "./Header.css";

const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      {width < 768 ? (
        <FaMobileAlt />
      ) : width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
      <div className="logo">
        <img src="images/ppbtesm.jpg" alt="" width="100" height="100" />
      </div>
      {/* <h1>{title}</h1> */}
      <NavBar />
    </header>
  );
};

export default Header;
