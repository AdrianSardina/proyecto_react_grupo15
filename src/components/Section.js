import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Section() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (<Row>
 <div >
    <h1>Proximos Estrenos</h1>
    <button > Ver todos</button>
</div>
<Carousel  variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      {/* item 1 */}
      <Row md={4}>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/47cba3276157469e2bedb02f731defa4.jpg?v=00000597" alt=""/></Col>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/1eb7d19ecf8106d1ffd339d87a6519b6.jpg?v=00000597" alt=""/></Col>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/b44fc1b30b80d8e6b3ce040b09575354.jpg?v=00000597" alt=""/></Col>
                    
            </Row>  
        <Carousel.Caption>
          <h1>
            Esta Semana
          </h1>
          <p>Ventas Anticipadas</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        {/* Item 2 */}
      <Row md={4}>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/511b3c45246817d552ab17ca0dd8fea2.jpg?v=00000597" alt=""/></Col>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/2210b8ed3a3d24f5c970682fb7be4479.jpg?v=00000597" alt=""/></Col>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/2766106a7ab088833bef9238db9588ff.jpg?v=00000597" alt=""/></Col>
                    
            </Row>  
        <Carousel.Caption>
          <h1>Este Mes</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* Item 3 */}
        <Row md={4}>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/ddf81c9584b039321b4288037bc66157.jpg?v=00000507" alt=""/></Col>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/7733b3928104c35603738f47894e0bbf.jpg?v=00000507" alt=""/></Col>
                    <Col md={{ span: 1, offset: 2 }}><img src="https://static.cinemarkhoyts.com.ar/Images/Posters/914e40abeeb1e82e49ce0cfbc40452b7.jpg?v=00000507" alt=""/></Col>
                    
            </Row>  
      <Carousel.Caption>
          <h1>Proximamente</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Row>
   
    
  );
}

export default Section;