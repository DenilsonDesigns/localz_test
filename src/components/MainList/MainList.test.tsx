import { render, screen, fireEvent } from "@testing-library/react";
import { MainList } from "./MainList";

const MOCK_MAIN_LIST_DATA = [
  {
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
  },

  {
    id: 2,
    name: "Morty Smith",
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
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  },
];

test("renders correct text to components", () => {
  render(
    <MainList
      data={MOCK_MAIN_LIST_DATA}
      activeIndex={1}
      listOnClick={jest.fn()}
    />
  );

  expect(screen.getByTestId("main-list-body-0")).toHaveTextContent(
    "Rick Sanchez"
  );

  expect(screen.getByTestId("main-list-body-1")).toHaveTextContent("Morty");
});

test("clicking in list item calls function with index of item", () => {
  const mockFunc = jest.fn();
  render(
    <MainList
      data={MOCK_MAIN_LIST_DATA}
      activeIndex={1}
      listOnClick={mockFunc}
    />
  );

  fireEvent.click(screen.getByTestId("main-list-body-0"));

  expect(mockFunc).toHaveBeenCalledWith(0);
});
