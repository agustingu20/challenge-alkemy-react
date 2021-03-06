import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavbarR({ token, logout }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          <img
            className="navbar-img"
            src="https://cdn-icons-png.flaticon.com/512/1352/1352480.png"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" exact as={NavLink}>
            Home
          </Nav.Link>
          {!token && (
            <Nav.Link to="/login" as={NavLink}>
              Login
            </Nav.Link>
          )}

          {token && (
            <Nav.Link to="/login" onClick={logout} as={NavLink}>
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
