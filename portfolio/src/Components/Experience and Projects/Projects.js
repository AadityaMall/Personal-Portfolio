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
                description={`Calculator that performs some basic and advanced functions

This calculator is created with the help of language python.

This calculator when started pops up on a screen where we can calculate basic commands like add, subtract, multiply, divide and percentage. There are three other modes added to this calculator, namely - Scientific Salculator , Audio Calculator and Voice Operated Calculator.

Scientific Calculator mode enables functions like permutations, Combinations, power, cuberoot, factorial etc.

Audio calculator reads out whatever calculation we enter as well as its answer.

Voice operated Calculator enables user to use his/her own voice to give commands to calculator which then provides the answer.

we have used various modules for it which we downloaded like`}
              />
            </Col>
            <Col md={4}>
              <ProjectCard
                title={"Contact Book System"}
                subtitle={"CPP File Management System"}
                image={"/images/CppProject.png"}
                iconChips={[CppIcon]}
                githubLink={"https://github.com/AadityaMall/PhoneBook-System"}
                miniDescription={`This is a demonstration as well as a layout of famous just dial app and its interface where a user can access contacts database of different genre.

User can search as well as browse all the contacts from the database.

Only admins can add or delete contacts from database.

To access the admin abilities, valid user email and password is required.`}
                description={`This is a demonstration as well as a layout of famous just dial app and its interface where a user can access contacts database of different genre.

User can search as well as browse all the contacts from the database.

Only admins can add or delete contacts from database.

To access the admin abilities, valid user email and password is required.`}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
