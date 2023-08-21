import { useContext } from 'react'
import { ContextoInventario } from '../../Contexto/ContextoDeInventario'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
import './../Tarjetas/styleTarjetas.css'

const Tarjetas = () => {

    const {inventario} = useContext(ContextoInventario)
    console.log(inventario, "inventario")

  return (
    <>
    <Container fluid="md-2">
    <Row>
            {inventario === undefined ? 
            "No Hay habitaciones disponibles":
            inventario.map((inventario) => (
                <>
                <Col>
                <Card data-bs-theme="dark" key={inventario.id} style={{ width: '15rem', margin:'10px'}}>
                <Card.Img variant="top" style={{ height: '10rem' }} src="https://images.mirai.com/INFOROOMS/11068706/nbM3g5Mw71XqrWJe8lk6/nbM3g5Mw71XqrWJe8lk6_large.jpg" />
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

export default Tarjetas;