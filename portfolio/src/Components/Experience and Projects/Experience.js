import React from "react";
import { Row, Col } from "react-bootstrap";
import { LocationOnOutlined } from "@mui/icons-material";
import {
  Chip,
  Stack,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  MongoDBIcon,
  JSIcon,
  NodeJsIcon,
  ReactIcon,
  PHPIcon,
} from "../Layout/SvgIcons";
const Experience = () => {

  return (
    <>
      <div className="min-h-screen">
        <div className="mt-[100px] text-center flex flex-column justify-center">
          <h1 className="text-brandColor mb-5">Experience</h1>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <Row className="py-[10px]">
              <Col md={4} className="flex justify-center items-center">
                <img
                  src="/images/nobrokerage.png"
                  className="text-center bg-white img-fluid w-[80%] m-4 p-2 rounded"
                  alt=""
                />
              </Col>
              <Col
                md={8}
                className="flex flex-column justify-center md:items-start items-center text-white md:px-[20px]"
              >
                <Row className="w-full flex items-center">
                  <Col md={6} className="md:text-left">
                    <span className="text-xl font-bold">Nobrokerage.com</span>
                  </Col>
                  <Col md={6} className="md:text-right font-bold">
                    <span>June 2024 - July 2024</span>
                  </Col>
                </Row>
                <Row className="my-[10px]">
                  <span className="text-center text-lg">
                    Role :{" "}
                    <strong className="text-brandColor">
                      Full Stack Developer Intern
                    </strong>
                  </span>
                </Row>
                <Row className="mb-[10px]">
                  <span className="text-center flex justify-center items-center text-sm">
                    <LocationOnOutlined /> In Office , Mumbai
                  </span>
                </Row>
                <Row className="mb-[10px]">
                  <span className="text-center flex justify-center items-center text-sm">
                    <ul className="marker:text-brandColor list-disc text-left">
                      <li>
                        As a full stack intern, I developed{" "}
                        <strong className="text-brandColor">
                          {" "}
                          2 MERN Stack Websites
                        </strong>{" "}
                        in a time span of 45 Days.
                      </li>
                      <li>
                        Initially I also worked on{" "}
                        <strong className="text-brandColor"> PHP </strong> and{" "}
                        <strong className="text-brandColor">
                          CodeIgniter 4 Model
                        </strong>
                      </li>
                      <li>
                        Both React Websites were built on single NodeJs backend
                        server, One websie is the admin website which controls
                        the data display on the main website to provide a smooth
                        and user friendly experience
                      </li>
                    </ul>
                  </span>
                </Row>
                <Row className="mb-[10px] flex justify-center w-[90%] overflow-auto hide-scrollbar">
                  <Stack direction="row" spacing={1}>
                    <Chip
                      avatar={<MongoDBIcon />}
                      className="text-white"
                      label="MongoDB"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<JSIcon />}
                      className="text-white"
                      label="Javascript"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<NodeJsIcon />}
                      className="text-white"
                      label="NodeJS"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<ReactIcon />}
                      className="text-white"
                      label="React"
                      variant="outlined"
                    />
                    <Chip
                      avatar={<PHPIcon />}
                      className="text-white"
                      label="PHP"
                      variant="outlined"
                    />
                  </Stack>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <Row className="py-[20px]">
              <Col md={4} className="flex justify-center items-center">
                <img
                  src="/images/rbl.png"
                  className="text-center bg-white img-fluid w-[80%] m-4 p-2 rounded"
                  alt=""
                />
              </Col>
              <Col
                md={8}
                className="flex flex-column justify-center md:items-start items-center text-white md:px-[20px]"
              >
                <Row className="w-full flex items-center">
                  <Col md={6} className="md:text-left">
                    <span className="text-xl font-bold">RBL Bank</span>
                  </Col>
                  <Col md={6} className="md:text-right font-bold">
                    <span>June 2023 - July 2023</span>
                  </Col>
                </Row>
                <Row className="my-[10px]">
                  <span className="text-center text-lg">
                    Role :{" "}
                    <strong className="text-brandColor">Product Intern</strong>
                  </span>
                </Row>
                <Row className="mb-[10px]">
                  <span className="text-center flex justify-center items-center text-sm">
                    <LocationOnOutlined /> In Office , Mumbai
                  </span>
                </Row>
                <Row className="mb-[10px]">
                  <span className="text-center flex justify-center items-center text-sm">
                    <ul className="marker:text-brandColor list-disc text-left">
                      <li>
                        As a product intern, I worked on the SUPER APP initial
                        stage where 2 Major Banking Apps were merging into one.{" "}
                      </li>
                      <li>
                        I crafted the
                        <strong className="text-brandColor">
                          {" "}
                          Information Architecture{" "}
                        </strong>{" "}
                        and{" "}
                        <strong className="text-brandColor">
                          Flowcharted
                        </strong>{" "}
                        both the apps to ensure that there is no loss of
                        features and data in the nre SUPER APP.
                      </li>
                      <li>
                        I also played a role in benchmarking and analysing
                        competition for the app and providing inputs for the
                        initial stage of designing.
                      </li>
                    </ul>
                  </span>
                </Row>
                <Row className="mb-[10px] flex justify-center w-[90%] overflow-auto hide-scrollbar">
                  <Stack direction="row" spacing={1}>
                    <Chip
                      className="text-white"
                      label="Information Architecture"
                      variant="outlined"
                    />
                    <Chip
                      className="text-white"
                      label="Benchmarking"
                      variant="outlined"
                    />
                    <Chip
                      className="text-white"
                      label="Flow Charting"
                      variant="outlined"
                    />
                    <Chip
                      className="text-white"
                      label="Competition Analysis"
                      variant="outlined"
                    />
                    <Chip
                      className="text-white"
                      label="UX"
                      variant="outlined"
                    />
                  </Stack>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="mt-[100px] text-center flex flex-column justify-center">
          <h1 className="mb-5 text-white">
            Positions of{" "}
            <strong className="text-brandColor">Responsibility</strong>
          </h1>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <Row className="py-[10px]">
              <Col md={4} className="flex justify-center items-center">
                <img
                  src="/images/IET.png"
                  className="text-center bg-white img-fluid w-[60%] m-4 p-2 rounded"
                  alt=""
                />
              </Col>
              <Col
                md={8}
                className="flex flex-column justify-center md:items-start items-center text-white md:px-[20px]"
              >
                <h5 className="text-brandColor font-bold">
                  IET ( Institution of Engineering and Technology ) Mpstme.
                </h5>
                <div className="px-[15px]">
                  <Stepper orientation="vertical">
                    <Step>
                      <StepLabel>
                        <span className="text-white font-bold">
                          Chairpersion ( Present )
                        </span>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        <span className="text-white">
                          Head - Public Reltions ( August 2023 - June 2024 )
                        </span>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>
                        <span className="text-white">
                          Executive - Competitve Programming ( Sep 2022 - August
                          2023 ){" "}
                        </span>
                      </StepLabel>
                    </Step>
                  </Stepper>
                </div>
              </Col>
            </Row>
          </div>
          <div className="mx-[40px] my-[10px] border-2 border-brandColor rounded">
            <Row className="py-[20px]">
              <Col md={4} className="flex justify-center items-center">
                <img
                  src="/images/GDSC.png"
                  className="text-center bg-white img-fluid w-[80%] m-4 p-2 rounded"
                  alt=""
                />
              </Col>
              <Col
                md={8}
                className="flex flex-column justify-center md:items-start text-white px-[10px] md:px-[20px]"
              >
                <h5 className="text-brandColor font-bold">
                  Google Developers Students Club MPSTME
                </h5>
                <div className="px-[15px]">
                  <Stepper orientation="vertical">
                    <Step>
                      <StepLabel>
                        <span className="text-white">
                          Executive - Competitve Programming ( Sep 2022 - August
                          2023 ){" "}
                        </span>
                      </StepLabel>
                    </Step>
                  </Stepper>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
