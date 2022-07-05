import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  title: "",
  fullName: "",
  number: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  type: "silver",
};
export const MemberAddForm = ({ addMember }) => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addMember({ ...form, id: uuidv4() });
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="mb-2">
          <Col md={2}>
            <Form.Group controlId="formGridState">
              <Form.Label>Title</Form.Label>
              <Form.Select onChange={handleOnChange} name="title" required>
                <option>Choose...</option>
                <option>Mr</option>
                <option>Ms</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                onChange={handleOnChange}
                name="fullName"
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Mobile no"
                onChange={handleOnChange}
                name="number"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={4}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address1</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={handleOnChange}
                name="address1"
                required
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                placeholder="Apartment, studio, or floor"
                onChange={handleOnChange}
                name="address2"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridCity" md={3} sm={6}>
            <Form.Label>City</Form.Label>
            <Form.Control onChange={handleOnChange} name="city" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" md={2} sm={6}>
            <Form.Label>State</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              onChange={handleOnChange}
              name="state"
              required
            >
              <option>Choose...</option>
              <option>NSW</option>
              <option>Queensland</option>
              <option>NT</option>
              <option>WA</option>
              <option>SA</option>
              <option>VIC</option>
              <option>ACT</option>
              <option>TAS</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip" md={2} sm={6}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="number"
              onChange={handleOnChange}
              name="zip"
              required
            />
          </Form.Group>
        </Row>

        <Button variant="success" type="submit">
          Add as a Silver Member
        </Button>
      </Form>
    </div>
  );
};
