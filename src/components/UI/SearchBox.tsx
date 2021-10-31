import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";

interface SearchBoxProps {
  value: string;
  onSearchChange: Function;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onSearchChange,
}) => {
  return (
    <Row md={4}>
      <Col xs={7}>
        <InputGroup size="sm" className="mb-3" style={{ marginTop: ".5em" }}>
          <InputGroup.Text
            id="inputGroup-sizing-sm"
            className={"lightFlowBackground"}
          >
            Search
          </InputGroup.Text>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Search by name..."
            value={value}
            onChange={(e) => {
              console.log("search e.target.value", e.target.value);
              onSearchChange(e.target.value);
            }}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};
