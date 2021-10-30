import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavMainProps {
  title: string;
  links: string[];
  textColour: string;
}

export const NavMain: React.FC<NavMainProps> = ({
  title,
  links,
  textColour,
}) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#ff7474" }}>
      <Container className={textColour}>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className={`me-auto ${textColour}`}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
