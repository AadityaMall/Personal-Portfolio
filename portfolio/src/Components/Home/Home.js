import React from "react";
import Typewriter from "typewriter-effect";
import { Row, Col, Container } from "react-bootstrap";
import {Instagram,GitHub,LinkedIn} from "@mui/icons-material"

const iconSX = {
  fontSize: "50px",
  color: "white",
  transition: ".1s ease-in-out",
  margin:"15px",
  ":hover": { color: "#2fcbe0", cursor: "pointer" },
};

const Home = () => {
  return (
    <>
      <Container className="mt-[50px]">
        <Row>
          <Col md={7} className="flex flex-col items-center justify-center">
            <h1 className="heading text-white">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="text-white scale-up 0.5s ease-in-out">
              I'm
              <strong> Aaditya Mall</strong>
            </h1>

            <div className="h-[40px] text-xl py-[20px] text-brandColor">
              <Typewriter
                options={{
                  strings: ["Student", "Freelancer", "MERN Stack Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
              />
            </div>
            <div className="social-media mt-[40px]">
              <Instagram sx={iconSX}/>
              <GitHub sx={iconSX}/>
              <LinkedIn sx={iconSX}/>
            </div>
          </Col>

          <Col md={5} className="flex items-center justify-center">
            <img
              src={`/images/HomePage.png`}
              alt="home pic"
              className="img-fluid max-h-64 my-[30px] z-100"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
