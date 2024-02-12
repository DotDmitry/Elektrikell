import { Navbar ,Nav} from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
/* import Logo from "./Logo"; */
{/* <Info {...props}/> */ }

function Navigation(props) {
  return (<Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/lowPrice/8" >LowPrice 8h</Link>
        <NavDropdown title="About" id="collapsible-nav-dropdown">
          <NavDropdown.Item as={Link} to="/about/me">Me</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/about/gamma">Gamma</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>);
}

export default Navigation;