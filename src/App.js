import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "./index.css";
import { MemberAddForm } from "./Components/MemberAddForm";
import { useState } from "react";
import { MemberListArea } from "./Components/MemberListArea";
function App() {
  const [members, setMembers] = useState([]);
  const addMember = (newMember) => {
    setMembers([...members, newMember]);
    console.log(members);
  };
  return (
    <div className="wrapper">
      <Container>
        <h3 className="py-3 mb-3">
          Welcome to PK gaming Membership management System
        </h3>

        {/* Member Form goes here */}
        <MemberAddForm addMember={addMember}></MemberAddForm>
        <hr className="formSeparationHr" />
        {/* Member List Area</MemberDetailsTable> Goes Here */}
        <MemberListArea members={members}></MemberListArea>
      </Container>
    </div>
  );
}

export default App;
