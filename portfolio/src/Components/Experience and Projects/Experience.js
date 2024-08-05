import React from "react";
import { Row, Col } from "react-bootstrap";
import { LocationOnOutlined } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
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
            <Row className="py-[20px]">
              <Col md={4} className="flex justify-center items-center">
                <img
                  src="/images/nobrokerage.png"
                  className="text-center bg-white img-fluid w-[80%] m-4 p-2 rounded"
                  alt=""
                />
              </Col>
              <Col
                md={8}
                className="flex flex-column justify-center md:items-start text-white md:px-[20px]"
              >
                <Row className="w-full flex items-center">
                  <Col md={6} className="md:text-left">
                    <span className="text-2xl font-bold">Nobrokerage.com</span>
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
                <Row className="mb-[10px]">
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
                className="flex flex-column justify-center md:items-start text-white md:px-[20px]"
              >
                <Row className="w-full flex items-center">
                  <Col md={6} className="md:text-left">
                    <span className="text-2xl font-bold">RBL Bank</span>
                  </Col>
                  <Col md={6} className="md:text-right font-bold">
                    <span>June 2023 - July 2023</span>
                  </Col>
                </Row>
                <Row className="my-[10px]">
                  <span className="text-center text-lg">
                    Role :{" "}
                    <strong className="text-brandColor">
                      Product Intern
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
                <Row className="mb-[10px]">
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
        </div>
      </div>
    </>
  );
};

export default Experience;
