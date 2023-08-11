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
            <FloatingLabel controlId="floatingTextarea2" label="Su Comentario">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
        />
      </FloatingLabel>

          </Form>


        </Form.Group>
        

      </Form>
    </div>


  </>

  )
};

export default ContactoClientes;
