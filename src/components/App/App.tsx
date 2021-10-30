import { Container, ListGroup, Row, Col, Card, Button } from "react-bootstrap";
import { NavMain } from "../UI/NavMain";
import "./App.css";

const App = () => {
  return (
    <div
      className="main"
      style={{ backgroundColor: "#fce5e5", minHeight: "100vh" }}
    >
      <NavMain
        title={"Szechuan.io"}
        links={["one", "two"]}
        textColour={"darkSalmon"}
      />
      <Container>
        {/* <div>test</div> */}
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
