import React from "react";
import "./index.scss";
import { Col, Row } from "react-bootstrap";
import projImg1 from "../../assets/images/project-img1.png";
import projImg2 from "../../assets/images/project-img2.png";
import projImg3 from "../../assets/images/project-img3.png";


const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  // Ajoutez d'autres objets de projet si nécessaire
];

const ProjectCards = () => {
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    groupedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <>
      {groupedProjects.map((group, index) => (
        <Row key={index}>
          {group.map((project, projIndex) => (
            <Col key={projIndex} xs={12} sm={6} md={4}>
              <div className="proj-imgbx">
                <img src={project.imgUrl} alt="Project" />
                <div className="proj-txtx">
                  <h4>{project.title}</h4>
                  <span>{project.description}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default ProjectCards;
