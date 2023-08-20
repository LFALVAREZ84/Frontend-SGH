import axios from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'

const Inventario = () => {

    const [habitacion, setHabitaciones] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        disponibilidad: "",
        img: "",
    })

    const handleChange = (e) => {
        setHabitaciones({
            ...habitacion,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await axios.post("http://localhost:3000/inventario",
            habitacion
            )
            console.log(respuesta, "Respuesta de habitaciones")
        } catch (error) {
            console.log(error, "Error de habitaciones")
        }
    }

    return (
        <>
        <Container>
            <Row>
                <Col>
                <br/>
                <h1 >Inventario de Habitaciones</h1>
                <Form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre
                        </label>
                        <input 
                            type="text"
                            value={habitacion.nombre} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="nombre" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">
                            Descripción
                        </label>
                        <textarea 
                            type="text" 
                            value={habitacion.descripcion} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="descripcion" 
                            rows="3">
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="precio" className="form-label">
                            Precio
                        </label>
                        <input 
                            type="number" 
                            value={habitacion.precio} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="precio" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disponibilidad" className="form-label">
                            Disponibilidad
                        </label>
                        <input 
                            type="number" 
                            value={habitacion.disponibilidad} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="disponibilidad" 
                        />
                    </div>
                    <div className="mb-3">
                    <Button variant="primary" type="submit">Agregar Habitacion</Button>
                    </div>
                </Form>
                </Col>
            </Row>
        </Container>
        </>
  )
};

export default Inventario