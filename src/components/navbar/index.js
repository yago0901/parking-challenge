import React, { Component } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../components/img/avatar_parking.png";

export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar fixed="top" className="navbar-custom navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="40"
              height="29.77"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Entrada</Nav.Link>
              <Nav.Link href="/saida">Saída</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
