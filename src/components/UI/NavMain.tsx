import React from "react";
import { Container, Navbar } from "react-bootstrap";

interface NavMainProps {
  title: string;
  textColour: string;
}

export const NavMain: React.FC<NavMainProps> = ({ title, textColour }) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#c64242" }}>
      <Container className={textColour}>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
