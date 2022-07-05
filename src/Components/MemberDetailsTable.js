import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
export const MemberDetailsTable = ({ members }) => {
  return (
    <div>
      {members.length ? (
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
            {members.map((item) => {
              return (
                <tr className="memberDetailsTableRow">
                  <td>
                    <Form.Check />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.fullName}</td>
                  <td>
                    {item.address2}/{item.address1}
                  </td>
                  <td>{item.number}</td>
                  <td>
                    <Col className="d-flex justify-content-start">
                      <Button className="mx-3">switch to platinum</Button>
                      <Button>switch to diamond</Button>
                    </Col>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h4>There are no members to show at the moment</h4>
      )}
    </div>
  );
};
