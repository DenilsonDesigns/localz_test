import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBox } from "./SearchBox";

test("renders given value prop on screen", () => {
  render(<SearchBox value={"test2 value"} onSearchChange={jest.fn()} />);

  expect(screen.getByDisplayValue("test2 value")).toBeInTheDocument();
});

test("typing in the input calls the onChange function with the value", () => {
  let onChangeMock = jest.fn();
  render(<SearchBox value={"test2 value"} onSearchChange={onChangeMock} />);

  fireEvent.change(screen.getByTestId("searchbox-input"), {
    target: { value: "23" },
  });

  expect(onChangeMock).toHaveBeenCalledWith("23");
});
