"use client";

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg ps-5 pe-5" className="navbar">
      <Navbar.Brand href="/" className="text-white">MyMovies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="text-white">Home</Nav.Link>
          <Nav.Link href="/movies" className="text-white">Movies</Nav.Link>
          <Nav.Link href="/input" className="text-white">Input</Nav.Link>
          <Nav.Link href="/login" className="text-white bg-primary">userlogin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
