import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { App } from "./App";
import { MOCK_RES } from "../../util/mortiosMockRes";

const server = setupServer(
  rest.get("*/character/*", (req, res, ctx) => {
    return res(ctx.json(MOCK_RES));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<App />);

  // This tests that the App component can receive a mock api response and
  // render the list of names based on MOCK_RES
  const out = await waitFor(() => screen.getByTestId("main-list-body-0"));
  expect(out).toHaveTextContent("Rick Test");

  expect(screen.getByTestId("main-list-body-1")).toHaveTextContent(
    "Morty Test"
  );
});
