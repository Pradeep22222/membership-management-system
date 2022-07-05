import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
export const MemberAddForm = () => {
  return (
    <div>
      <Form>
        <Row className="mb-2">
          <Col md={4}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="number" placeholder="mble no" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={4}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridCity" md={3} sm={6}>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" md={2} sm={6}>
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
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
            <Form.Control type="number" />
          </Form.Group>
          <Col></Col>
        </Row>

        <Button variant="success" type="submit">
          Add as a Silver Member
        </Button>
      </Form>
    </div>
  );
};
