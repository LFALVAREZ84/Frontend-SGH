import Carrusel from "../../Componentes/Carrusel/Carrusel"
import { useContext } from 'react'
import { ContextoInventario } from '../../Contexto/ContextoDeInventario'
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const Inicio = () => {

  const {inventario} = useContext(ContextoInventario)
    console.log(inventario, "inventario")

  return (
    <>
    <Carrusel />
    <br/>
    <h1>Habitaciones</h1>
    <Container fluid="mb">
    <Row style={{margin:'5px'}}>
            {inventario === undefined ? 
            "No Hay habitaciones disponibles":
            inventario.map((inventario) => (
                <>
                <Col>
                <Card data-bs-theme="dark" key={inventario.id} style={{ width: '15rem', margin:'10px'}}>
                <Card.Img variant="top" style={{ height: '10rem' }} src={inventario.img1} />
                <Card.Body>
                    <Card.Title>
                        {inventario.nombre}
                    </Card.Title>
                    <Card.Text>
                        Precio: {inventario.precio} 
                    </Card.Text>

                <Button variant="primary">Descripcion</Button>
                </Card.Body>
            </Card>
            </Col>
            </>   
        ))}
    </Row>
    </Container>
    </>
  )
}

export default Inicio