import './App.css';
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Destaque from './components/Destaque';

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg" expanded={expanded} className="navbarContainer">
        <Navbar.Brand className="navbarBrand">Imobiliária</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          className="navbarToggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="navLink">Home</Nav.Link>
            <Nav.Link href="#aluguel" className="navLink">Casas para Alugar</Nav.Link>
            <Nav.Link href="#contato" className="navLink">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Destaque />
    </div>
  );
}

export default App;
