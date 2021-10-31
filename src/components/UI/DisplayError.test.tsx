import { render, screen } from "@testing-library/react";
import { DisplayError } from "./DisplayError";

test("renders `errorMsg` prop to screen", () => {
  render(<DisplayError errorMsg={"test error msg"} />);

  expect(screen.getByTestId("error-msg")).toHaveTextContent("test error msg");
});
