import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

// components
import PlayerTable from "./PlayerTable";

const PlayerList = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-start">
          <Link to="#">List</Link> <p className="mx-1">|</p>
          <Link to="#">Add Player</Link>
        </Col>
      </Row>
      <PlayerTable />
    </>
  );
};

export default PlayerList;
