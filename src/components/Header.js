 import React from "react";
// import Button from 'react-bootstrap/Button';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';



import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
      <img src="https://www.cinesantarosa.com.ar/assets/img/logos/logoCineVioleta.svg" alt="logo" />
     
      </Nav.Item>

      <Nav.Item>
      <p>El sitio del cine</p>
      </Nav.Item>

      <Nav.Item>
      <a href="peliculas.html">Peliculas</a>
      </Nav.Item>
      <Nav.Item>
      <p>Cines</p>
      </Nav.Item>
      <Nav.Item>
      <p>Home</p>
      </Nav.Item>
      <Nav.Item>
        <Row >
        <Col >
        <input type="search" />
        </Col>
        <Col>
        <img src="https://www.cinemarkhoyts.com.ar/images/res/search-outline.png" alt="lupa" />
        </Col>
        <Col>
        <a href=""><img src="../img/icon.png" alt="logo" /></a>
        </Col>
        </Row>
           
            
      </Nav.Item>
      
      <Nav.Item>
      
       
      </Nav.Item>
    </Nav>
  );
}

export default Header;