import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom"; // Importing useLocation
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [expand, updateExpanded] = useState(false); // Handles whether navbar is expanded
  const [navColour, updateNavbar] = useState(false); // Handles background color change on scroll
  const location = useLocation(); // Detect route changes

  // Handle scroll event to update navbar background color
  const scrollHandler = useCallback(() => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  // Collapse the navbar when changing route
  useEffect(() => {
    updateExpanded(false); // Collapse navbar after route change
  }, [location]); // Triggers when the location (route) changes

  const handleToggleClick = () => {
    updateExpanded(!expand); // Toggle the navbar state
  };

  return (
    <Navbar
      expanded={expand} // Control the collapse/expand state
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

        {/* Bootstrap's Navbar.Toggle for toggle button */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggleClick}
          className="relative bg-transparent border-transparent p-2 focus:outline-none focus:ring-0"
        >
          {/* Custom Hamburger icon */}
          <span className="block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transition-transform duration-350 ease-in-out"></span>
          <span className="block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transition-transform duration-350 ease-in-out"></span>
          <span className="block bg-[#00ADB5] h-[4px] w-[27px] mt-[5px] mb-[5px] transition-transform duration-350 ease-in-out"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link pr-4 pl-4 active" : "nav-link pr-4 pl-4"
                }
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
              >
                Resume
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                to={"/"}
                state={{ fromNavLink: true }} 
                className="pr-4 nav-link not-active"
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
