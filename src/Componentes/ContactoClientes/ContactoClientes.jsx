import React from 'react';
import { Form, InputGroup, FloatingLabel, Col, Row, Button } from 'react-bootstrap';

const ContactoClientes = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Form className='w-75'>
        <Row>
          <Col md={6}>
            <Form.Group controlId="nombreApellido">
              <Form.Control type="text" placeholder="Nombre y Apellido" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="telefono">
          <Form.Control type="tel" placeholder="Teléfono" />
        </Form.Group>

        <Form.Group controlId="motivo">
          <Form.Control as="select" placeholder="Motivo">
            <option value="" disabled selected>Selecciona un motivo</option>
            <option value="consulta">Consulta</option>
            <option value="reserva">Reserva</option>
            <option value="queja">Queja</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="comentario">
          <FloatingLabel controlId="floatingTextarea2" label="Su Comentario">
            <Form.Control as="textarea" style={{ height: '200px' }} />
          </FloatingLabel>
        </Form.Group>

        <div className='text-center'>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactoClientes;
