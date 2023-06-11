import React from "react";
import ProjectCards from "../ProjectCards";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = React.useState("first");

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="project" id="project">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['P','r', 'o', 'j', 'e', 't']} idx={6} />
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                  </p>
                  <div className="nav-pills mb-5 justify-content-center" id="pills-tab">
                    <button
                      className={`nav-link ${activeTab === "first" ? "active" : ""}`}
                      onClick={() => handleTabChange("first")}
                    >
                      1
                    </button>
                    <button
                      className={`nav-link ${activeTab === "second" ? "active" : ""}`}
                      onClick={() => handleTabChange("second")}
                    >
                      2
                    </button>
                    <button
                      className={`nav-link ${activeTab === "third" ? "active" : ""}`}
                      onClick={() => handleTabChange("third")}
                    >
                      3
                    </button>
                  </div>
                  <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {activeTab === "first" && (
                      <div className="row">
                        <ProjectCards />
                      </div>
                    )}
                    {activeTab === "section" && (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque
                        provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi
                        dicta officiis asperiores delectus quasi inventore debitis quo.
                      </p>
                    )}
                    {activeTab === "third" && (
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque
                        provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi
                        dicta officiis asperiores delectus quasi inventore debitis quo.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
