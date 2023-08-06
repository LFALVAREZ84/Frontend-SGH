import React from 'react'
import { Container, Row, Col, Image,card } from 'react-bootstrap';

const AboutUs = () => {
  return (
   <div> 
     <Container>
     <Row className="mb-4">
          <Col>
            <h1 className="text-center">Acerca de Nosotros</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <p className="text-center">
              Breve descripción de la misión de la empresa.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={3} className="mb-4">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="/ruta-de-la-imagen-integrante-1.jpg"
                alt="Integrante 1"
                className="rounded-circle mt-3"
              />
     </Container>

   </div>
  )
}

export default AboutUs