import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Main() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant='dark'  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      {/* item 1 */}
        <Row className="justify-content-md-center">
          <Col xs={12} sm={3} md={3}>
          <img 
          className="d-block w-100" 
          src="https://static.cinemarkhoyts.com.ar/Images/Posters/ddf81c9584b039321b4288037bc66157.jpg?v=00000507"
          alt="First slide"
          />
          </Col>
        
        </Row>
        
        <Carousel.Caption>
          <h3>Peliculas </h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Item 2 */}
        <Row className="justify-content-md-center">
          <Col xs={12} sm={3} md={3}>
          <img 
          className="d-block w-100" 
          src="https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/754.jpg?v=00000597"
          alt="First slide"
          />
          </Col>
        
        </Row>
        <Carousel.Caption>
          <h3>Calidad</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Item 3 */}
        <Row className="justify-content-md-center">
          <Col xs={12} sm={3} md={3}>
          <img 
          className="d-block w-100" 
          src="https://static.cinemarkhoyts.com.ar/Images/Posters/2210b8ed3a3d24f5c970682fb7be4479.jpg?v=00000597"
          alt="First slide"
          />
          </Col>
        
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;