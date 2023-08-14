import React from 'react';
import { Form, FloatingLabel, Col, Row, Button, Card } from 'react-bootstrap';
import './ContactoClientes.css';
import MapaTucuman from '../Mapa/Mapa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';

const ContactoClientes = () => {
  const ContactoSchema = Yup.object().shape({
    nombreApellido: Yup.string().required('Campo requerido').max(40, 'maximo 40 caracteres'),
    email: Yup.string().email('Formato de correo electrónico inválido').required('Campo requerido').max(30, 'maximo 30 caracteres').min(5, 'minimo 5 caracteres'),
    telefono: Yup.string().required('Campo requerido').max(15, 'maximo 15 caracteres'),
    motivo: Yup.string().required('Campo requerido'),
    comentario: Yup.string().required('Campo requerido').min(4, 'numero minimo de caracteres').max(400, 'numero maximo de caracteres'),
  });

  const initialValues = {
    email: '',
    nombreApellido: '',
    motivo: '',
    comentario: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ContactoSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log('Valores de formik', values);
      // Agrega aquí la lógica para enviar el formulario
    },
  });

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
      <Form className='w-75' onSubmit={formik.handleSubmit} noValidte>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="nombreApellido">
              <Form.Control
                type="text"
                placeholder="Ingrese Nombre y Apellido"
                name="nombreApellido"
                maxLength={40}
                value={formik.values.nombreApellido}
                onChange={formik.handleChange}
                {...formik.getFieldProps("nombreApellido")}


              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Ingresar Email"
                id="email"
                name="email"
                maxLength={30}
                value={formik.values.email}
                onChange={formik.handleChange}
                {...formik.getFieldProps("email")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="telefono" className="mb-3">
          <Form.Control
            type="tel"
            placeholder="Ingresar Teléfono"
            name="telefono"
            maxLength={15}
            value={formik.values.telefono}
            onChange={(e) => {
              const inputValue = e.target.value;
              const sanitizedInput = inputValue.replace(/[^0-9-+]/g, ''); // Solo permite números, + y -
              formik.handleChange('telefono')(sanitizedInput);
            }}
          />
        </Form.Group>

        <Form.Group controlId="motivo" className="mb-3">
          <Form.Control
            as="select"
            placeholder="Motivo"
            name="motivo"
            value={formik.values.motivo}
            onChange={formik.handleChange}
          >
            <option disabled value="">
              Selecciona un motivo
            </option>
            <option value="consulta">Consulta</option>
            <option value="reserva">Reserva</option>
            <option value="queja">Queja</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="comentario" className="mb-3">
          <FloatingLabel controlId="floatingTextarea2" label="Su Comentario">
            <Form.Control
              as="textarea"
              style={{ height: '200px' }}
              name="comentario"
              maxLength={400}
              minLength={4}
              value={formik.values.comentario}
              onChange={formik.handleChange}
            />
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
