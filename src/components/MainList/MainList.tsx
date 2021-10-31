import React from "react";
import { Image, ListGroup } from "react-bootstrap";

interface MainListProps {
  data: IMortiosDataObj[];
  listOnClick: Function;
  activeIndex: number;
}

export const MainList: React.FC<MainListProps> = ({
  data,
  listOnClick,
  activeIndex,
}) => {
  return (
    <ListGroup data-testid={"main-list-body"}>
      {data.map((el, i) => {
        return (
          <ListGroup.Item
            data-testid={`main-list-body-${i}`}
            key={i}
            style={{ padding: ".2rem 1rem" }}
            onClick={() => listOnClick(i)}
            className={i === activeIndex ? "lightFlowBackground" : ""}
          >
            <Image
              style={{ width: "1em", marginRight: ".5em" }}
              src={el.image}
              rounded
            />
            {el.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
