import { render, screen, fireEvent } from "@testing-library/react";
import { TablePagination } from "./TablePagination";

test("renders pagination button icons", async () => {
  render(
    <TablePagination numButs={20} activeBut={5} paginOnClick={jest.fn()} />
  );
  const paginSvgFirst = screen.getByTestId("first-button");
  expect(paginSvgFirst.classList).toContain("bi-caret-left-fill");

  const paginSvgSecond = screen.getByTestId("second-button");
  expect(paginSvgSecond.classList).toContain("bi-caret-left");

  const paginSvgThird = screen.getByTestId("third-button");
  expect(paginSvgThird.classList).toContain("bi-caret-right");

  const paginSvgFourth = screen.getByTestId("fourth-button");
  expect(paginSvgFourth.classList).toContain("bi-caret-right-fill");
});

describe("clicking pagination buttons sets correct page", () => {
  it("first page button moves to first page", () => {
    const mockFn = jest.fn();
    render(
      <TablePagination numButs={20} activeBut={5} paginOnClick={mockFn} />
    );

    const paginSvgFirst = screen.getByTestId("first-button");
    fireEvent.click(paginSvgFirst);
    expect(mockFn).toBeCalledWith(1);
  });

  it("back one page button moves one page lower", () => {
    const mockFn = jest.fn();
    render(
      <TablePagination numButs={20} activeBut={5} paginOnClick={mockFn} />
    );

    const paginSvgSecond = screen.getByTestId("second-button");
    fireEvent.click(paginSvgSecond);
    expect(mockFn).toBeCalledWith(4);
  });

  it("up one page button moves one page higher", () => {
    const mockFn = jest.fn();
    render(
      <TablePagination numButs={20} activeBut={5} paginOnClick={mockFn} />
    );

    const paginSvgThird = screen.getByTestId("third-button");
    fireEvent.click(paginSvgThird);
    expect(mockFn).toBeCalledWith(6);
  });

  it("last page button moves to last page", () => {
    const mockFn = jest.fn();
    render(
      <TablePagination numButs={20} activeBut={5} paginOnClick={mockFn} />
    );

    const paginSvgFourth = screen.getByTestId("fourth-button");
    fireEvent.click(paginSvgFourth);
    expect(mockFn).toBeCalledWith(20);
  });
});
