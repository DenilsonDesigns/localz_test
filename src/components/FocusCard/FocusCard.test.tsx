import { render, screen } from "@testing-library/react";
import { FocusCard } from "./FocusCard";

const MOCK_FOCUS_CARD_DATA = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/1"],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

test("renders correct text to component", () => {
  render(<FocusCard data={MOCK_FOCUS_CARD_DATA} />);

  expect(screen.getByTestId("focus-card-body")).toHaveTextContent(
    "Rick Sanchez"
  );

  expect(screen.getByTestId("focus-card-body")).toHaveTextContent(
    "Status: Alive"
  );

  expect(screen.getByTestId("focus-card-body")).toHaveTextContent(
    "Origin: Earth"
  );

  expect(screen.getByTestId("focus-card-body")).toHaveTextContent(
    "Location: Earth"
  );

  expect(screen.getByTestId("focus-card-body")).toHaveTextContent(
    "Created: 04/11/2017"
  );
});
