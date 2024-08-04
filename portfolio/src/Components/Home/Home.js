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
  WhatsApp,
  MailOutline,
} from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useIntersectionObserver from "../../useIntersectionObserver";
import { Row, Col } from "react-bootstrap";
import {
  HackerrankIcon,
  MongoDBIcon,
  JSIcon,
  NodeJsIcon,
  ReactIcon,
  CppIcon,
  PythonIcon,
  JavaIcon,
  MySQLIcon,
  VSCodeIcon,
  Postman,
  Windows,
  HtmlIcon,
  CSSIcon,
  BootstrapIcon,
  TailwindCssIcon,
} from "../Layout/SvgIcons";

const iconSX = {
  fontSize: "50px",
  color: "white",
  transition: ".1s ease-in-out",
  margin: "15px",
  ":hover": { color: "#2fcbe0", cursor: "pointer" },
};
const skillIconsSX = {
  fontSize: "80px",
  color: "white",
  transition: ".1s ease-in-out",
  margin: "15px",
};

const Home = () => {
  const navigate = useNavigate();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });
  const [refOne, isVisibleOne] = useIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });
  const [refTwo, isVisibleTwo] = useIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });
  const [refThree, isVisibleThree] = useIntersectionObserver({
    threshold: 0.1, // Adjust as needed
  });

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    const offset = 0; // Adjust this value as needed

    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });
  };

  const handleMailClick = () => {
    window.location.href = `mailto:aadityarmall@gmail.com`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+919326430750`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/+919326430750`;
  };

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
            <Tooltip title="Instagram">
              <Link to={`https://www.instagram.com/aaditya.mall`}>
                <Instagram sx={iconSX} />
              </Link>
            </Tooltip>
            <Tooltip title="Hackerrank">
              <Link to={`https://www.hackerrank.com/profile/aadityarmall`}>
                <HackerrankIcon sx={iconSX} />
              </Link>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Link to={`https://www.linkedin.com/in/aaditya-mall-b45a48216/`}>
                <LinkedIn sx={iconSX} />
              </Link>
            </Tooltip>
            <Tooltip title="Github">
              <Link to={`https://github.com/AadityaMall`}>
                <GitHub sx={iconSX} />
              </Link>
            </Tooltip>
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
                  onClick={(e)=>handleLinkClick(e,"contact")}
                >
                  <Call />
                  Contact
                </Button>
              </Col>
            </Row>
          </div>
          <div className="flex justify-center items-center mt-[20px]">
            <div
              className="relative"
              onClick={(e) => handleLinkClick(e, "aboutSectionStart")}
              role="button"
            >
              <ArrowDownward
                // fontSize="large"
                className="text-white animate-bounce text-5xl"
              />
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`flex justify-center overflow-hidden items-center min-h-screen fade-in-section ${
          isVisibleOne ? "visible" : ""
        }`}
        ref={refOne}
        id="aboutSectionStart"
      >
        <Container className="m-3 mt-0 mb-0">
          <Row className="mt-[80px]">
            <Col
              md={8}
              className="flex flex-column justify-center items-center"
            >
              <h1 className="text-brandColor">About Me</h1>

              <p className="text-white m-3 text-justify text-xl">
                I am currently pursuing a Bachelor of Technology degree in
                Computer Science from SVKM's NMIMS University, specializing in
                Artificial Intelligence. I am a creative and motivated
                individual with strong skills in mathematics, logic, and coding.
                My academic and personal experiences have instilled in me a
                passion for technology and innovation. <br />
                <br /> I am actively expanding my knowledge and expertise in the{" "}
                <strong className="text-brandColor">
                  MERN stack (MongoDB, Express.js, React, Node.js){" "}
                </strong>{" "}
                , which is enhancing my capabilities in full-stack web
                development. My enthusiasm for data science drives me to
                continuously explore and learn new techniques and methodologies
                to analyze and interpret complex data sets. <br />
                <br /> I am eager to apply my skills in real-world projects and
                look forward to embracing new challenges and opportunities in
                the field of technology.
              </p>
            </Col>
            <Col md={4} className="flex justify-center items-center">
              <img
                src="/images/Aaditya.JPG"
                alt="Aaditya Mall"
                className="img-fluid max-h-80 z-100 rounded"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={`flex justify-center flex-column overflow-hidden items-center min-h-screen fade-in-section ${
          isVisibleTwo ? "visible" : ""
        }`}
        ref={refTwo}
        id="aboutSectionStart"
      >
        <Container className="m-3 mt-4 mb-0 flex flex-column justify-center items-center">
          <h1 className="text-white text-center">
            Professional <strong className="text-brandColor">Skillset</strong>
          </h1>
          <Row className="mt-[20px]">
            <Col xs={6} md={3}>
              <Tooltip title="MongoDB">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <MongoDBIcon sx={skillIconsSX} />
                  <Tooltip title="Beginner">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[60%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="JavaScript">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <JSIcon sx={skillIconsSX} />
                  <Tooltip title="Intermidiate">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[85%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="React">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <ReactIcon sx={skillIconsSX} />
                  <Tooltip title="Intermidiate">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[75%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="Node Js">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <NodeJsIcon sx={skillIconsSX} />
                  <Tooltip title="Intermidiate">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[75%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>

            <Col xs={6} md={3}>
              <Tooltip title="HTML">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <HtmlIcon sx={skillIconsSX} />
                  <Tooltip title="Advanced">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[100%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="CSS">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <CSSIcon sx={skillIconsSX} />
                  <Tooltip title="Advanced">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[90%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="Bootstrap">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <BootstrapIcon sx={skillIconsSX} />
                  <Tooltip title="Intermidiate">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[85%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="Tailwind CSS">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <TailwindCssIcon sx={skillIconsSX} />
                  <Tooltip title="Beginner">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[50%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>

            <Col xs={6} md={3}>
              <Tooltip title="C++">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <CppIcon sx={skillIconsSX} />
                  <Tooltip title="Intermidiate">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[75%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>

            <Col xs={6} md={3}>
              <Tooltip title="Python">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <PythonIcon sx={skillIconsSX} />
                  <Tooltip title="Intermidiate">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[75%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="Java">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <JavaIcon sx={skillIconsSX} />
                  <Tooltip title="Beginner">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[50%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={3}>
              <Tooltip title="SQL">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <MySQLIcon sx={skillIconsSX} />
                  <Tooltip title="Beginner">
                    <div className="absolute w-full bottom-0 left-0">
                      <div className="h-[8px] w-[50%] bg-brandColor"></div>
                    </div>
                  </Tooltip>
                </div>
              </Tooltip>
            </Col>
          </Row>
        </Container>
        <Container className="m-3 mt-5 mb-0 flex flex-column justify-center items-center">
          <h1 className="text-white text-center">
            Professional <strong className="text-brandColor">Toolset</strong>
          </h1>
          <Row className="mt-[20px]">
            <Col xs={6} md={4}>
              <Tooltip title="Vs Code">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <VSCodeIcon sx={skillIconsSX} />
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={4}>
              <Tooltip title="Postman">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <Postman sx={skillIconsSX} />
                </div>
              </Tooltip>
            </Col>
            <Col xs={6} md={4}>
              <Tooltip title="Windows">
                <div className="relative text-4xl p-[20px] md:m-[15px] sm:m-[6px] border border-brandColor align-middle text-center rounded-lg table shadow-[4px_5px_4px_3px_brandColor] overflow-hidden transition-all duration-400">
                  <Windows sx={skillIconsSX} />
                </div>
              </Tooltip>
            </Col>
          </Row>
        </Container>
      </div>
      <div  
        className={`flex justify-start w-full md:h-screen md:justify-center md:mb-0 mb-[100px] flex-column items-center fade-in-section ${
          isVisibleThree ? "visible" : ""
        }`}
        ref={refThree}
        id="contact"
      >
        <Container className="mt-[100px] flex flex-column justify-center items-center border-1 border-brandColor rounded-xl">
          <h1 className="text-white text-center mt-3">
            Contact <strong className="text-brandColor">Me</strong>
          </h1>
          <Row className="mt-[20px] w-full m-4">
            <Col xs={6} md={6} className="flex justify-center items-center">
              <img
                src="/images/aadityaBitmoji.png"
                alt="Bitmoji"
                className="img-fluid max-h-48 z-100"
              />
            </Col>
            <Col
              xs={6}
              md={6}
              className="flex flex-column justify-center items-center"
            >
              <Button
                variant="contained"
                className="w-full max-w-500 m-2 normal-case text-black font-bold bg-[#25d366]"
                onClick={handleWhatsAppClick} // Use navigate function for routing
              >
                <WhatsApp className="mx-[10px]" />
                Whatsapp
              </Button>
              <Button
                variant="contained"
                className="w-full max-w-500 m-2 normal-case bg-[#DB4437] text-black font-bold"
                onClick={handleMailClick} // Use navigate function for routing
              >
                <MailOutline className="mx-[10px]" />
                Mail
              </Button>
              <Button
                variant="contained"
                className="w-full max-w-500 m-2 normal-case bg-brandColor text-black font-bold"
                onClick={handlePhoneClick} // Use navigate function for routing
              >
                <Call className="mx-[10px]" />
                9326430750
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
