import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className='AboutUs'>
      {/* Banner */}
      <div className="banner bg-success d-flex align-items-center justify-content-center">
        <Image src="/public/logo_RHR.jpg" alt="Banner" className="img-fluid banner-image" />
      </div>
      <Container>
        <div className="row text-bg text-center my-4">
          <div className="col-md-8">
            <h1>
              ¡Bienvenidos a Rolling Hotel&Resort! Somos un equipo de jóvenes programadores apasionados que creamos una página de gestión hotelera. Nuestra plataforma ofrece un servicio de autogestión y reservas para el público general. Simplifica tus operaciones y mejora la experiencia de tus clientes con Rolling Hotel&Resort.
            </h1>
          </div>
        </div>

        <Row className="mb-4">
          {/* Cards para los nombres de cada integrante */}
          <Col md={3} sm={6} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src="/ruta-de-la-imagen-integrante-1.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Nombre del Integrante 1</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src="/ruta-de-la-imagen-integrante-2.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Nombre del Integrante 2</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src="/ruta-de-la-imagen-integrante-3.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Nombre del Integrante 3</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src="/ruta-de-la-imagen-integrante-4.jpg" />
              <Card.Body>
                <Card.Title className="text-center">Nombre del Integrante 4</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs;
