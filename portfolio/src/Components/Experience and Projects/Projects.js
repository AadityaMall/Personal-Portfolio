import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  MongoDBIcon,
  JSIcon,
  NodeJsIcon,
  ReactIcon,
  BootstrapIcon,
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
              />
            </Col>
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
              />
            </Col>
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
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
