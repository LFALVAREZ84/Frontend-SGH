/* eslint-disable no-undef */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Formulario() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [startDate, setStartDate] = useState(new Date("08/14/2023"));
    const [endDate, setEndDate] = useState(new Date("08/14/2023"));

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Reservar Ahora
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Disponibilidad</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
      <Row>
        <Col>
        <span><label>Adultos: </label> </span>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                             <ToggleButton id="tbg-radio-1" value={1}>
                                  1 
                             </ToggleButton>
                             <ToggleButton id="tbg-radio-2" value={2}>
                                  2
                             </ToggleButton>
                             <ToggleButton id="tbg-radio-3" value={3}>
                                  2+
                             </ToggleButton>
                            </ToggleButtonGroup>
        </Col>
        <Col>
        <span><label>Niños: </label> </span>
                            <ToggleButtonGroup type="radio" name="options2" defaultValue={4}>
                             <ToggleButton id="tbg-radio-4" value={4}>
                                  0 
                             </ToggleButton>
                             <ToggleButton id="tbg-radio-5" value={5}>
                                  1
                             </ToggleButton>
                             <ToggleButton id="tbg-radio-6" value={6}>
                                  2
                             </ToggleButton>
                             <ToggleButton id="tbg-radio-7" value={7}>
                                  2+
                             </ToggleButton>
                            </ToggleButtonGroup>
        </Col>
      </Row>
    </Container>
        <br/>            
                <div className="mb-3">
        <label htmlFor="selectToastPlacement">Habitacion</label>
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setPosition(e.currentTarget.value)}
        >
          {[
            'Simple',
            'Doble',
            'Triple',
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
        <br/>   
      </div>
                
                    <>
                    <span><label>Fecha de ingreso: </label> </span>
                
                    <DatePicker
                        minDate={startDate}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="dd/MM/yyyy" 
                        />
                    <br/>
                    <br/>
                    <span><label>Fecha de egreso: </label> </span>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        dateFormat="dd/MM/yyyy"
                    />
                </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Consultar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Formulario