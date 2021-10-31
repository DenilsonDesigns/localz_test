import { render, screen } from "@testing-library/react";
import { NavMain } from "./NavMain";

test("renders title prop to screen", () => {
  render(<NavMain title={"nav-title"} textColour={"green"} />);

  expect(screen.getByTestId("navmain-title")).toHaveTextContent("nav-title");
});

test("gives `textColour` prop as classname to container", () => {
  render(<NavMain title={"nav-title"} textColour={"green"} />);

  expect(screen.getByTestId("navmain-container").classList).toContain("green");
});
