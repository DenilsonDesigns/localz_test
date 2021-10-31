import React from "react";
import { Container, Navbar } from "react-bootstrap";

interface NavMainProps {
  title: string;
  textColour: string;
}

export const NavMain: React.FC<NavMainProps> = ({ title, textColour }) => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#c64242" }}>
      <Container data-testid={"navmain-container"} className={textColour}>
        <Navbar.Brand data-testid={"navmain-title"} href="#home">
          {title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
