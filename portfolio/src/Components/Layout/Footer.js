import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    Instagram,
    GitHub,
    LinkedIn,
    WhatsApp,
} from "@mui/icons-material";

const iconSX = {
    color: "white",
    transition: ".1s ease-in-out",
    ":hover": { color: "#2fcbe0", cursor: "pointer" },
};

function Footer() {
    let year = "2024";
    return (
        <Container fluid className="footer bg-[#181a27] h-[35px] text-white">
            <Row>
                <Col md="4" className="flex justify-center items-center">
                    <span>Designed and Developed by Aaditya Mall</span>
                </Col>
                <Col md="4" className="flex justify-center items-center">
                    <span>Copyright © {year}</span>
                </Col>
                <Col md="4" className="flex justify-center items-center">
                    <ul className="flex justify-center items-center mb-0">
                        <li className="ml-[10px] mr-[10px]">
                            <a
                                href="https://github.com/aadityamall"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GitHub sx={iconSX}/>
                            </a>
                        </li>
                        <li className="ml-[10px] mr-[10px]">
                            <a
                                className="text-white"
                                href="https://github.com/aadityamall"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsApp sx={iconSX}/>
                            </a>
                        </li>

                        <li className=" ml-[10px] mr-[10px]">
                            <a
                                href="https://www.linkedin.com/in/aaditya-mall-b45a48216/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedIn sx={iconSX}/>
                            </a>
                        </li>
                        <li className=" ml-[10px] mr-[10px]">
                            <a
                                href="https://www.instagram.com/aaditya.mall"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram sx={iconSX}/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;