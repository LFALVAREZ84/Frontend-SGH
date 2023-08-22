import Carrusel from "../../Componentes/Carrusel/Carrusel"
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react'
import { ContextoInventario } from '../../Contexto/ContextoDeInventario'
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const Inicio = () => {

  let {id} = useParams
  const {inventario} = useContext(ContextoInventario)

  return (
    <>
    <Carrusel />
    <br/>
    <h1>Habitaciones</h1>
    <Container fluid="mb">
      <Row style={{ margin:'10px'}}>
          {inventario.map((inventario) => ( 
            <Col key={inventario.id}>
              <Card data-bs-theme="dark"  
                      style={{ width: '15rem', margin:'10px'}}>
                <Card.Img 
                      variant="top" 
                      style={{ height: '10rem' }} 
                      src={inventario.img1} 
                      alt="imagen 1"
                      />
                <Card.Body>
                    <Card.Title>
                        {inventario.nombre}
                    </Card.Title>
                    <Card.Text>
                        Precio: {inventario.precio} 
                    </Card.Text>
                       <Link 
                          to={`/Descripcion/${inventario.id}`}>
                        <Button 
                          variant="primary">
                            Descripcion
                        </Button>
                       </Link> 
                </Card.Body>
            </Card>
            </Col> 
        ))}
    </Row>
    <div className='container-fluid'>
              <div className='row'>
                <a href='https://previaje.gob.ar/'
                   target="_blank">
                  <img 
                    className="img-fluid d-block w-100"
                    src="src\assets\img\Publicidad Previaje.jpg" 
                    alt="publicidad pre-viaje"/>
                </a>
              </div>
            </div>
    </Container>
    </>
  )
}

export default Inicio