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