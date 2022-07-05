import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
export const MemberDetailsTable = () => {
  return (
    <div>
      <Table striped className="memberDetailsTable">
        <thead className="memberDetailsTableHead">
          <tr>
            <th>
              <Form.Check />
            </th>
            <th className="text-center">Title</th>
            <th className="text-center">Full Name</th>
            <th className="text-center">Full Address</th>
            <th className="text-center">Mobile No</th>
            <th className="mx-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="memberDetailsTableRow">
            <td>
              <Form.Check />
            </td>
            <td>Mr</td>
            <td>Mark</td>
            <td>2/54 St Hilliers Road Auburn NSW 2144</td>
            <td>0451644397</td>
            <td>
              <Col className="d-flex justify-content-start">
                <Button className="mx-3">switch to platinum</Button>
                <Button>switch to diamond</Button>
              </Col>
            </td>
          </tr>
          <tr className="memberDetailsTableRow">
            <td>
              <Form.Check />
            </td>
            <td>Mr</td>
            <td>Mark</td>
            <td>2/54 St Hilliers Road Auburn NSW 2144</td>
            <td>0451644397</td>
            <td>
              <Col className="d-flex justify-content-start">
                <Button className="mx-3">switch to platinum</Button>
                <Button>switch to diamond</Button>
              </Col>
            </td>
          </tr>
          <tr className="memberDetailsTableRow">
            <td>
              <Form.Check />
            </td>
            <td>Mr</td>
            <td>Mark</td>
            <td>2/54 St Hilliers Road Auburn NSW 2144</td>
            <td>0451644397</td>
            <td>
              <Col className="d-flex justify-content-start">
                <Button className="mx-3">switch to platinum</Button>
                <Button>switch to diamond</Button>
              </Col>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
