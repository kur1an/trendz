import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavBar.css'

function NavBars() {
  return (
    <Navbar expand="lg" className=" bg-danger-subtle">
      <Container>
        <Navbar.Brand href="/">Trendz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className=" fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="/products" className=" fw-bold">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className=" fw-bold">
              Cart
            </Nav.Link>

 <Nav.Link href="/Books" className=" fw-bold">
              Books
            </Nav.Link>
            
          </Nav>
          <Nav className=" NavRight ms-auto">
            <Nav.Link href="#home" className=" fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className=" fw-bold">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className=" fw-bold">
              Cart
            </Nav.Link>

            <NavDropdown title="Footwear" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Crocs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chapels</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
