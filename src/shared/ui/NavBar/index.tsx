import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <Navbar
      className="bg-secondary header-navigation bg-dark navbar-expand-xxl"
      variant="dark"
    >
      <Container className="m-0">
        <Navbar.Brand href="/friends">Friend App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/friends">About</Nav.Link>
            <Nav.Link href="/friends/new">Add Friend</Nav.Link>
            <Nav.Link href="/friends">Log out</Nav.Link>
            <Nav.Link href="/friends">Edit profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
