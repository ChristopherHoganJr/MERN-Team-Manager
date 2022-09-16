import React from "react";
import Table from "react-bootstrap/Table";

// components
import DeleteButton from "./DeleteButton";

const PlayerTable = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Perferred Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>
            <DeleteButton />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>
            <DeleteButton />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PlayerTable;
