import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
/* import Logo from "./Logo"; */
{/* <Info {...props}/> */}

function Navigation(props){
    return(<Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/About" >About</Link>
        <Link className="nav-link" to="/lowPrice/8" >LowPrice 8h</Link>
      </Nav>
    </Container>
  </Navbar>);
}

export default Navigation;