import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// components
import Navbar from "./components/Navbar";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start">
            <Navbar />
          </Col>
        </Row>
        <PlayerList />
      </Container>
    </div>
  );
}

export default App;
