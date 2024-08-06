import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  MongoDBIcon,
  JSIcon,
  NodeJsIcon,
  ReactIcon,
  BootstrapIcon,
  TailwindCssIcon,
  CppIcon,
} from "../Layout/SvgIcons";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="min-h-screen">
        <Container className="w-screen">
          <Row className="mt-[100px]">
            <Col md={4}>
              <ProjectCard
                title={"SoleStore Ecommerce"}
                subtitle={"MERN Stack Website"}
                image={"/images/solestore.png"}
                iconChips={[
                  MongoDBIcon,
                  ReactIcon,
                  JSIcon,
                  NodeJsIcon,
                  BootstrapIcon,
                ]}
                previewLink={'https://solestore-ecommerce.onrender.com/'}
                githubLink={'https://github.com/AadityaMall/SoleStore-Ecommerce'}
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title={"Personal Portfolio"}
                subtitle={"React Website"}
                image={"/images/portfolio.png"}
                iconChips={[
                  ReactIcon,
                  JSIcon,
                  BootstrapIcon,
                  TailwindCssIcon,
                ]}
                previewLink={'https://aadityamall.vercel.app/'}
                githubLink={'https://github.com/AadityaMall/Personal-Portfolio'}
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title={"Advanced Calculator"}
                subtitle={"Python - Tkinter"}
                image={"/images/calculator.png"}
                iconChips={[
                  ReactIcon,
                  JSIcon,
                  BootstrapIcon,
                  TailwindCssIcon,
                ]}
                previewLink={'https://aadityamall.vercel.app/'}
                githubLink={'https://github.com/AadityaMall/Personal-Portfolio'}
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title={"Contact Book System"}
                subtitle={"CPP File Management System"}
                image={"/images/phonebooksystem.png"}
                iconChips={[
                  CppIcon,
                ]}
                githubLink={'https://github.com/AadityaMall/PhoneBook-System'}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
