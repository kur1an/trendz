import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

import "./NavBar.css";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/userSlice";
import { toast } from "react-toastify";

function NavBars({cartCount}) {
const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogout = ()=>{
dispatch(userLogout());
toast.success("User Logout Sucessfully!!");
navigate("/login")
}

  return (
    <Navbar expand="lg" className="bg-warning-subtle">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Trendz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="fw-bold">
              Phones
            </Nav.Link>
           
            <Nav.Link as={Link} to="/books" className="fw-bold">
              Books
            </Nav.Link>



          </Nav>

          <Nav className="NavRight ms-auto">
            <Nav.Link as={Link} to="/search" className="fw-bold">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search-heart-fill" viewBox="0 0 16 16">
  <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
</svg>

  </Nav.Link>
            <Nav.Link as={Link} to="/login" className="fw-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="fw-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg> <span className=" text-danger">{cartCount}</span>
            </Nav.Link>

            
          </Nav>

<NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin/addproduct">
                Add Products
              </NavDropdown.Item>
<NavDropdown.Item as={Link} to="/admin/listproducts">
                List Products
              </NavDropdown.Item>
<NavDropdown.Item as={Link} to="/admin/listusers">
                List Users
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/admin/admindash">
                Admin Dash
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/chapels">
                User Dash
              </NavDropdown.Item>


              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} onClick={handleLogout} to="/login">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
