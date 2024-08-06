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
  PythonIcon,
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
                previewLink={"https://solestore-ecommerce.onrender.com/"}
                githubLink={
                  "https://github.com/AadityaMall/SoleStore-Ecommerce"
                }
                miniDescription={`A Complete MERN Stack ecommerce website which has various pages and functionalities, example Cart, Wishlist, Checkout, Dashboard for Admin etc `}
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title={"Personal Portfolio"}
                subtitle={"React Website"}
                image={"/images/portfolio.png"}
                iconChips={[ReactIcon, JSIcon, BootstrapIcon, TailwindCssIcon]}
                previewLink={"https://aadityamall.vercel.app/"}
                githubLink={"https://github.com/AadityaMall/Personal-Portfolio"}
                miniDescription="A personal portfolio website built on React Framework and Tailwind CSS"
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title={"Advanced Calculator"}
                subtitle={"Python - Tkinter"}
                image={"/images/calculator.png"}
                iconChips={[PythonIcon]}
                githubLink={"https://github.com/AadityaMall/Personal-Portfolio"}
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title={"Contact Book System"}
                subtitle={"CPP File Management System"}
                image={"/images/CppProject.png"}
                iconChips={[CppIcon]}
                githubLink={"https://github.com/AadityaMall/PhoneBook-System"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
