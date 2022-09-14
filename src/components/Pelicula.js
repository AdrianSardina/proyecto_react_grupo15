import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
function Pelicula(props) {
  return (
   
    <Card border='dark' style={{ width: '85%' }}>
    <Card.Header><h2>{props.titulo}</h2></Card.Header>
    <Row >

      <Col>
      <Card.Img variant="top" src={props.img} />
      </Col>
      <Col>
      <Card.Body >
           <Card.Title>{"Sinopsis:"}</Card.Title>
             <Card.Text>
              {props.descripcion}
             </Card.Text>
         </Card.Body>

        <ListGroup className="list-group-horizontal">
        <ListGroup.Item>{props.duracion}</ListGroup.Item>
        <ListGroup.Item>{props.actores}</ListGroup.Item>
        
        </ListGroup>
        
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Metacritic <ProgressBar now={50} label='50'/></ListGroup.Item>
        <ListGroup.Item>Rotten Tomatoes <ProgressBar now={70} label='70'/></ListGroup.Item>
        <ListGroup.Item>IMDb <ProgressBar now={60} label='60'/></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Ver mas</Card.Link>
        
        </Card.Body>
      </Col>
    
       
      
      </Row>
      
    </Card>
    
    
    
     
   
  );
}
export default Pelicula;