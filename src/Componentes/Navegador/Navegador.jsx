<<<<<<< HEAD
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './../Navegador/styleNavegador.css';

const Navegador = () => {
  return (
    <Navbar expand="lg" className='text-center text-white'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title="Habitaciones" id="navbarDropdown1">
              <NavDropdown.Item href="#action1">Handicap</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2">King</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Single</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Suite</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Suite Delux</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="navbarDropdown2">
              <NavDropdown.Item href="#action1">Restaurante</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2">Salones y Reacreación</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Spa & Piscina</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Recreación</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='action' href="#action6">Promociones</Nav.Link>
              <Container>
              <Row>
              <Col xs={6} md={3}>
              <Image src="src\assets\img\Logo Hotel.jpg" rounded />
              </Col>
              </Row>
              </Container>
            <Nav.Link className='action' href="#action7">Experiencias</Nav.Link>
            <Nav.Link className='action' href="#action8">Nosotros</Nav.Link>
            <Nav.Link className='action' href="#action9">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;
=======
import { useContext } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { UsuariosContext } from '../../Contexto/UserContext';

function Navegador() {

  const {cerrarSesion} = useContext(UsuariosContext)

  const usuario = JSON.parse(localStorage.getItem("usuario"));


  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        { usuario ? <Navbar.Brand href="/Home">Bienvenido {usuario.nombre}</Navbar.Brand> : null}
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            {usuario ? (
                <Nav.Link href="/InicioDeSesion" onClick={cerrarSesion}>Cerrar Sesion</Nav.Link>
            ) : (
              <>
              <Nav.Link href="/Registro">Registro</Nav.Link>
              <Nav.Link href="/InicioDeSesion">Ingreso</Nav.Link>
              </>
                
            )}
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegador
>>>>>>> origin/Login
