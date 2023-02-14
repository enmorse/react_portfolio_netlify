import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Me",
    path: "/about",
    icon: <SiIcons.SiAboutdotme />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaIcons.FaProjectDiagram />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];

export default SidebarData;