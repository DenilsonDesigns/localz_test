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
    <ListGroup>
      {data.map((el, i) => {
        return (
          <ListGroup.Item
            key={i}
            style={{ padding: ".2rem 1rem" }}
            onClick={() => listOnClick(i)}
            // active={i === activeIndex}
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
