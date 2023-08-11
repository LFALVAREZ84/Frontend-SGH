import React from 'react';
import { Form, InputGroup, FloatingLabel, Col, Row } from 'react-bootstrap';


const ContactoClientes = () => {
  return (<>
    <div className='d-flex justify-content-center'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form>
            <br />
            <Row>
              <Col>
                <Form.Control placeholder="Nombre y Apellido" rows={6} />
              </Col>
              <Col>
                <Form.Control placeholder="Email" rows={6} />
              </Col>
            </Row>
            <br />

            <Form.Group className="mb-3" controlId="Teléfono">

              <Form.Control placeholder="Teléfono" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Motivo">

              <Form.Control placeholder="Motivo" />
            </Form.Group>

          </Form>


        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

          <Form.Control as="textarea" rows={3} />
        </Form.Group>

      </Form>
    </div>


  </>

  )
};

export default ContactoClientes;
