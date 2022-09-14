import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Pelicula from './components/Pelicula';
import pelicula from './json/peliculas.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container style={{ backgroundColor:"#D4CDCD" }} >
       <Header/>
       <Main/>
       <Section/>
       
       
       <Row>
        <Col>
        <br></br>
        {pelicula.map(peli =>
        <Pelicula
          img={peli.img}
          titulo = {peli.titulo}
          descripcion = {peli.descripcion}
          duracion = {peli.duracion}
          actores = {peli.actores}  
        ></Pelicula>)}
        </Col>
       
       </Row>
         
       
                                                
    </Container>
    
    
  );
}

export default App;
