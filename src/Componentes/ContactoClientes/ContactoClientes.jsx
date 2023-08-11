import React from 'react';
import { Form, FloatingLabel, Col, Row, Button } from 'react-bootstrap';
import './ContactoClientes.css'
import MapaTucuman from '../Mapa/Mapa'

const ContactoClientes = () => {
  return (
    <div className='form-container d-flex flex-column align-items-center'>
      <MapaTucuman />

      <div className='logo-container text-center'>
        <img
          src='../../../public/img/logo_RHR (1).jpg' // Ruta a tu imagen de logo
          alt='Logo del hotel'
          className='logo-img'
        />
      </div>
      <h1 className='mb-4 text-white'>Escribinos</h1>
      <Form className='w-75'>
        <Row className="mb-3">
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

        <Form.Group controlId="telefono" className="mb-3">
          <Form.Control type="tel" placeholder="Teléfono" />
        </Form.Group>

        <Form.Group controlId="motivo" className="mb-3">
          <Form.Control as="select" placeholder="Motivo">
            <option value="" disabled selected>Selecciona un motivo</option>
            <option value="consulta">Consulta</option>
            <option value="reserva">Reserva</option>
            <option value="queja">Queja</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="comentario" className="mb-3">
          <FloatingLabel controlId="floatingTextarea2" label="Su Comentario">
            <Form.Control as="textarea" style={{ height: '200px' }} />
          </FloatingLabel>
        </Form.Group>

        <div className='text-center'>
          <Button className='custom-button' variant='primary' type='submit'>
            Enviar Consulta
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactoClientes;

