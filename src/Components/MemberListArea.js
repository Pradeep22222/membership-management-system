import React from "react";
import { MembersDetailsSection } from "./MembersDetailsSection";
import { MemberSearchForm } from "./MemberSearchForm";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
export const MemberListArea = ({ members }) => {
  return (
    <div>
      <MemberSearchForm></MemberSearchForm>
      <div className="buttonGroup">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Silver Members</Button>
          <Button variant="info">Platinum Members</Button>
          <Button variant="success">Diamond Members</Button>
        </ButtonGroup>
      </div>
      <div className="membershipSort d-flex ">
        <div className="sortBy ">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="sortType mx-3 ">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <hr className="formSeparationHr" />
      <MembersDetailsSection members={members}></MembersDetailsSection>
    </div>
  );
};
