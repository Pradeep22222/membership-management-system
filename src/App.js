import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "./index.css";
import { MemberAddForm } from "./Components/MemberAddForm";
import { MemberDetailsTable } from "./Components/MemberDetailsTable";
import { MemberListArea } from "./Components/MemberListArea";
function App() {
  return (
    <div className="wrapper">
      <Container>
        <h3 className="py-3 mb-3">
          Welcome to PK gaming Membership management System
        </h3>

        {/* Member Form goes here */}
        <MemberAddForm></MemberAddForm>
        <hr className="formSeparationHr" />
        {/* Member List Area</MemberDetailsTable> Goes Here */}
        <MemberListArea></MemberListArea>
      </Container>
    </div>
  );
}

export default App;
