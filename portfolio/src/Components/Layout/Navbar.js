import React, { useState, useEffect, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      scrollHandler();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHandler]);

  // Function to handle nav link click and close the navbar
  const handleNavLinkClick = () => {
    if (expand) {
      updateExpanded(false);
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={
        navColour
          ? "backdrop-blur-md shadow-teal transition-all duration-300 ease-out p-1 py-1.5 px-8 text-lg"
          : "fixed transition-all duration-300 ease-out p-1 py-1.5 px-8 text-lg"
      }
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center justify-content-center"
        >
          <h1 className="text-brandColor text-3xl">{`<Aaditya Mall/>`}</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(!expand)}
          className="relative bg-transparent border-transparent"
        >
          <span className="block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transform rotate-0 left-0 opacity-100 transition-transform duration-350 ease-in-out"></span>
          <span className="block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transform rotate-0 left-0 opacity-100"></span>
          <span className="block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transform rotate-0 left-0 opacity-100 transition-transform duration-350 ease-in-out"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link pr-4 pl-4 active" : "nav-link pr-4 pl-4"
                }
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? "nav-link pr-4 pl-4 active" : "nav-link pr-4 pl-4"
                }
                onClick={handleNavLinkClick}
              >
                Experience
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive ? "nav-link pr-4 pl-4 active" : "nav-link pr-4 pl-4"
                }
                onClick={handleNavLinkClick}
              >
                Projects
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "nav-link pr-4 pl-4 active" : "nav-link pr-4 pl-4"
                }
                onClick={handleNavLinkClick}
              >
                Resume
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/#contact"
                className="pr-4 nav-link not-active"
                onClick={handleNavLinkClick}
              >
                Contact
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
