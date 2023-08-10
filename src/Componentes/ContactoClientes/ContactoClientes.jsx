import React from 'react'
import { Form } from 'react-bootstrap'

const ContactoClientes = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

      </Form>
    </div>
  )
}

export default ContactoClientes