import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const MemberSearchForm = () => {
  return (
    <div>
      <Form className="memberSearchForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="search" placeholder="Search member by name" />
        </Form.Group>
      </Form>
    </div>
  );
};
