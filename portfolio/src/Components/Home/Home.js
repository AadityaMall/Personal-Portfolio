import React from "react";
import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";
import {
  Instagram,
  GitHub,
  LinkedIn,
  Description,
  Call,
  ArrowDownward,
} from "@mui/icons-material";
import { SvgIcon, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useIntersectionObserver from "../../useIntersectionObserver";
import { Row, Col } from "react-bootstrap";

// Custom Hackerrank icon using createSvgIcon
const HackerrankIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 448 512">
    <path d="M454.843 141.001c-13.019-22.417-172.832-115-198.859-115-26.019 0-185.895 92.351-198.84 115-12.947 22.649-13.019 207.358 0 230.009 13.018 22.639 172.839 114.989 198.84 114.989 26 0 185.841-92.466 198.851-114.999 13.007-22.533 13.016-207.583.008-229.999zM309.862 398.15c-3.559 0-36.756-32.137-34.141-34.762.781-.78 5.625-1.328 15.768-1.644 0-23.564.53-61.622.844-77.553.038-1.814-.395-3.081-.395-5.256h-71.812c0 6.379-.412 32.523 1.232 65.479.205 4.078-1.42 5.353-5.158 5.335-9.102-.025-18.211-.099-27.321-.071-3.683.009-5.274-1.374-5.157-5.488.826-30.043 2.66-75.488-.134-191.07v-2.849c-8.688-.314-14.717-.862-15.508-1.652-2.624-2.624 31.032-34.76 34.581-34.76 3.558 0 36.989 32.145 34.383 34.76-.782.781-7.098 1.338-15.067 1.652v2.84c-2.174 23.135-1.823 71.506-2.362 94.686h72.107c0-4.089.351-31.212-1.077-75.145-.091-3.047.853-4.646 3.781-4.672 9.945-.072 19.9-.117 29.855-.055 3.108.019 4.105 1.546 4.043 4.834-3.28 171.861-.594 159.867-.594 188.975 7.97.315 15.112.864 15.895 1.655 2.588 2.615-30.205 34.761-33.763 34.761z" />
  </SvgIcon>
);

const iconSX = {
  fontSize: "50px",
  color: "white",
  transition: ".1s ease-in-out",
  margin: "15px",
  ":hover": { color: "#2fcbe0", cursor: "pointer" },
};

const Home = () => {
  const navigate = useNavigate();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });
  const [refOne, isVisibleOne] = useIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });

  return (
    <>
      <div
        className={`flex justify-center overflow-hidden items-center h-screen fade-in-section ${
          isVisible ? "visible" : ""
        }`}
        ref={ref}
      >
        <Container className="flex flex-col justify-evenly items-center h-[90%]">
          <img
            src="/images/HomePage.png"
            alt="home pic"
            className="img-fluid max-h-48 z-100"
            loading="lazy"
          />
          <h1 className="heading text-white">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="text-white">
            I'm <strong className="text-brandColor">Aaditya Mall</strong>
          </h1>
          <div className="h-[40px] text-xl py-[20px]">
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
            <Link to={`https://www.instagram.com/aaditya.mall`}>
              <Instagram sx={iconSX} />
            </Link>
            <Link to={`https://www.hackerrank.com/profile/aadityarmall`}>
              <HackerrankIcon sx={iconSX} />
            </Link>
            <Link to={`https://www.linkedin.com/in/aaditya-mall-b45a48216/`}>
              <LinkedIn sx={iconSX} />
            </Link>
            <Link to={`https://github.com/AadityaMall`}>
              <GitHub sx={iconSX} />
            </Link>
          </div>
          <div className="w-[100%] max-w-500">
            <Row>
              <Col md={6} className="flex justify-center items-center">
                <Button
                  variant="contained"
                  className="w-full max-w-500 m-2 normal-case bg-brandColor text-black font-bold"
                  onClick={() => navigate("/resume")} // Use navigate function for routing
                >
                  <Description />
                  Resume
                </Button>
              </Col>
              <Col md={6} className="flex justify-center items-center">
                <Button
                  variant="contained"
                  className="w-full max-w-500 m-2 normal-case bg-brandColor text-black font-bold"
                >
                  <Call />
                  Contact
                </Button>
              </Col>
            </Row>
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <div className="relative">
              <ArrowDownward
                // fontSize="large"
                className="text-white animate-bounce text-5xl"
              />
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`flex justify-center overflow-hidden items-start fade-in-section ${
          isVisibleOne ? "visible" : ""
        }`}
        ref={refOne}
      >
        <Container className="m-3 mt-0 mb-0">
          <Row className="mt-[60px]">
            <Col
              md={8}
              className="flex flex-column justify-center items-center"
            >
              <h1 className="text-brandColor">About Me</h1>

              <p className="text-white m-3 text-justify text-xl">
                I am currently pursuing a Bachelor of Technology degree in
                Computer Science, specializing in Artificial Intelligence. I am
                a creative and motivated individual with strong skills in
                mathematics, logic, and coding. My academic and personal
                experiences have instilled in me a passion for technology and
                innovation. <br /><br /> I am actively expanding my knowledge and expertise
                in the MERN stack (MongoDB, Express.js, React, Node.js), which
                is enhancing my capabilities in full-stack web development. My
                enthusiasm for data science drives me to continuously explore
                and learn new techniques and methodologies to analyze and
                interpret complex data sets. <br /><br /> I am eager to apply my skills in
                real-world projects and look forward to embracing new challenges
                and opportunities in the field of technology.
              </p>
            </Col>
            <Col md={4} className="flex justify-center items-center">
            <img
            src="/images/Aaditya.JPG"
            alt="Aaditya Mall"
            className="img-fluid max-h-80 z-100 rounded"
            loading="lazy"
          /></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
