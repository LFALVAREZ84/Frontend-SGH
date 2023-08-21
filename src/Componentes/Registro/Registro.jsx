import { Container, Row, Col, Button, Form, Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import axios from 'axios';

const Registro = () => {

const [datoUsuario, setDataUsuario] = useState({
  nombre: "",
  email: "",
  contraseña: "",  
})

const handleChange = (e) => {
  setDataUsuario ({
    ...datoUsuario,
    [e.target.name]: e.target.value
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  try {
    const respuesta = axios.post("http://localhost:3000/usuarios", 
    datoUsuario)
   console.log(respuesta, "Respuesta de Usuarios")

  } catch (error) {
    console.log(error, "Error de Usuarios")
    
  }
}

  return (
    
    <Container>
  <br />
  <br />
      <Row>
        <Col></Col>
        <Col><Card border="primary" style={{ width: '24rem' }}>
     
     {[
       'Primary',
     ].map((variant) => (
       <Card bg={variant.toLowerCase()} 
       key={variant} 
       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>
       <Card.Header>
       <Row>
       <Col></Col>
       <Col></Col>
       <Col></Col>
       <Col><FontAwesomeIcon icon={faUser} beat style={{color: "#ffffff",}} /></Col>
       <Col></Col>
       <Col></Col>
       <Col></Col>
       </Row>
       </Card.Header>
       </Card>
     ))}
     
       <Card.Body>
       <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Nombre</Form.Label>
       <Form.Control 
              type="text"
              name="nombre"
              value={datoUsuario.nombre}
              onChange={handleChange}
              placeholder="Ingresar nombre" />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Correo Electrónico</Form.Label>
       <Form.Control 
              type="email"
              name="email"
              value={datoUsuario.email}
              onChange={handleChange} 
              placeholder="Ingresar email" />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Contraseña</Form.Label>
       <Form.Control 
              type="password"
              name="contraseña"
              value={datoUsuario.contraseña} 
              onChange={handleChange} 
              placeholder="Ingresar Contraseña" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Confirmar Contraseña</Form.Label>
       <Form.Control 
              type="password" 
              placeholder="Ingresar nuevamente la contraseña" />
     </Form.Group>
     <Row >
     <Col><Button variant="primary" type="submit">
       Registrarse
     </Button></Col>
     <Col>
     <Nav defaultActiveKey="/home" as="ul">
     <Nav.Item as="li"><Form.Label>Si ya posee una cuenta<Nav.Link eventKey="link-1" href="/InicioDeSesion">...ir a iniciar sesión</Nav.Link></Form.Label>
     
      </Nav.Item>
      </Nav>
      </Col>
     </Row> 
     
   </Form>
       </Card.Body>
     </Card></Col>
        <Col></Col>
      </Row>
 <br />
  
    </Container> 
  );
}

export default Registro;