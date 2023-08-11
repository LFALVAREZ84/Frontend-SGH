import React from 'react';
import { Form, FloatingLabel, Col, Row, Button ,Card} from 'react-bootstrap';
import './ContactoClientes.css';
import MapaTucuman from '../Mapa/Mapa';
import {useFormik} from 'formik';
import * as Yup  from 'yup';
import clsx from 'clsx';


const ContactoClientes = () => {
  return (
    <div className='form-container d-flex flex-column align-items-center'>
      <h2 className='mb-4 text-white'>Aquí estamos!</h2>
      <MapaTucuman />

      <div className='logo-container text-center'>
        <img
          src='../../../public/img/logo_RHR (1).jpg' // Ruta a tu imagen de logo
          alt='Logo del hotel'
          className='logo-img'
        />
      </div>
      <h3 className='mb-4 text-white'>Escribinos</h3>
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
      <Card className="text-center mt-5">
        <Card.Body>
          <Card.Title>Contacto del Hotel</Card.Title>
          <Card.Text>
            Para cualquier consulta o reserva, puedes contactarnos al siguiente número:
          </Card.Text>
          <Card.Text className="fw-bold">Teléfono: +54 03814335687</Card.Text>
          <Button variant="primary" href="tel:+54 03814335687">Llamar</Button>
        </Card.Body>
      </Card>
    </div>
    
    );
};

export default ContactoClientes;

