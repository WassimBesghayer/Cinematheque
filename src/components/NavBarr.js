import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavBarr() {
  return (
    <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/"><img id='logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F03%2F31%2F18%2F36%2Fcinema-1294496_1280.png&f=1&nofb=1&ipt=2e7b6d2e580c3f6b8e7782da078aba4db871f2d63343ed1033c80e17adf95171&ipo=images'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2"><Link to="/series">Series</Link></Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Genre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Countries
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Classification
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"><Link to="/about">About us</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Looking for Something ?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link id='login' href="#action1"><Link to="...">Sign in</Link></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
    <div>
        
    </div>

export default NavBarr