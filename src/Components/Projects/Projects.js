import React from "react";
import { useState } from "react";
import pictureList from "./data";
import "./Projects.css";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);

  let picture = pictureList[index];

  const showParagraph = {
    color: "forestgreen",
    fontSize: "2rem",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <main>
      <article>
        <h2 className="h2__title">Projects</h2>
        <br />
        <section>
          <h5 className="h5__title">
            My Most Recent Projects <br />
          </h5>
          <p>
            One is a screenshot of a Blog and the other is a screenshot of a To
            Do List&#44; both were created using ReactJS&#44; HTML5&#44; and
            CSS3&#44; and both were created without using the Create React App.
            Both web pages are fully responsive and will respond to a laptop
            screen&#44; a tablet screensize&#44; and a cell phone screensize as
            indicated by the ReactJS icons&#44; the FaLaptop icon&#44; the
            FaTabletAlt icon&#44; and the FaMobileAlt icon in the top center of
            the web page and when you resize the web page to the desired
            screensize&#x2e; One screenshot is a screenshot of the project
            itself and the other screenshot is a screenshot of a portion of the
            source code for that respective project.
          </p>
        </section>
        <br />
        <section>
          <h6
            className="h6__title"
            style={{ color: "forestgreen", margin: "0.5rem" }}
          >
            Projects
          </h6>
          <br />
          <section>
            <h6
              className="h6__title"
              style={{ color: "forestgreen", margin: "0.5rem" }}
            >
              Blog
            </h6>
            <p>
              &#x2022; With the Blog you can read the title of every blog
              post&#44; the date of every blog post&#44; and the blog post
              itself&#x2e; When you click on the post you will see all the
              information as indicated above&#44; as &nbsp;&nbsp;well as&#44; an
              Edit Button and a Delete Button to either edit the post or to
              delete the post&#x2e; You can then traverse to the Post Page and
              create a new post and &#x2f; or to the About Page to read more
              &nbsp;&nbsp;about the blog and its creator&#x2e;
            </p>
          </section>
          <section>
            <h6
              className="h6__title"
              style={{ color: "forestgreen", margin: "0.5rem" }}
            >
              To Do List
            </h6>
            <p>
              &#x2022; With the To Do List you can add items in the add items
              input field and &#x2f; or the add &#x2f; FaPlus button&#44; check
              items to mark them off &#40;indicated by checking the box next to
              the item and when a &nbsp;&nbsp;line is drawn through the
              item&#41;&#44; delete items by clicking on the trash icon net to
              the item, and search for items in the search input field&#x2e; You
              can then traverse between the Home Page and the &nbsp;&nbsp;About
              Page to either access the To Do List on the Home Page or read
              about the To Do List and &#x2f; or its creator on the About
              Page&#x2e;
            </p>
          </section>
          <br />
          <br />
          {/* <h6 className="picture__title">
            <i>{picture.name} </i>
            by {picture.author}
          </h6>
          <p className="picture__length">
            ({index + 1} of {pictureList.length})
          </p> */}
          <a
            href="#"
            className="portfolio__item project__picture"
            style={{ textDecoration: "none" }}
          >
            {pictureList &&
              pictureList.map((item) => (
                <div key={item.id} className="project__pictures">
                  {isShown && (
                    <text className="show__paragraph" style={showParagraph}>
                      {item.description}
                    </text>
                  )}
                  <img
                    src={item.url}
                    alt={item.alt}
                    width="425"
                    height="400"
                    className="portfolio__img pictures"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                  />
                </div>
              ))}
          </a>
        </section>
      </article>
    </main>
  );
};

export default Projects;
