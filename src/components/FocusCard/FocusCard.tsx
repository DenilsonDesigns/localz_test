import React from "react";
import { Card } from "react-bootstrap";

interface FocusCardProps {
  data: IMortiosDataObj;
}

export const FocusCard: React.FC<FocusCardProps> = ({ data }) => {
  return (
    <Card
      style={{
        width: "26rem",
        borderColor: "#ff7474",
        borderWidth: "thick",
      }}
    >
      <Card.Img variant="top" src={data?.image} />
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Text>
          <strong>Status: </strong>
          {data?.status}
        </Card.Text>
        <Card.Text>
          <strong>Origin: </strong>
          {data?.origin?.name}
        </Card.Text>
        <Card.Text>
          <strong>Location: </strong>
          {data?.location?.name}
        </Card.Text>
        <Card.Text>
          <strong>Created: </strong>
          {new Date(data?.created).toLocaleString("en-GB", { timeZone: "UTC" })}
        </Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
