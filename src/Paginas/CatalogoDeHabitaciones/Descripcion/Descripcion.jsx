
import { useContext } from 'react'
import { ContextoInventario } from './../../../Contexto/ContextoDeInventario'
import './../Descripcion/styleDescripcion.css';
import { useParams } from 'react-router-dom/dist';

const Descripcion = () => {
  
  let {id} = useParams();
  const {inventario} = useContext(ContextoInventario)
  const inventarioSeleccionado = inventario.find((inventarioSeleccionado) => inventarioSeleccionado.id === id);

  return (
    <>
      <body data-bs-theme="dark">
    <br/>
    <h1>Habitacion {inventarioSeleccionado}</h1>
    
    <Container md>          
        <Row >  
        <Col md="5" xs="5">
            <Row border="primary" md="12" xs="12" style={{margin:'5px'}} >
            <Image className="d-block w-100 h-100" src={inventarioSeleccionado.img1} thumbnail />
            </Row>
        </Col> 
        <Col md="7" xs="7">
        <Row>
        <Table striped bordered hover responsive>
        <thead>
        <tr>
          <th>Detalles:</th>
        </tr>
        <tr>
        <td>
            {inventarioSeleccionado.descripcion}
        </td>
        </tr>       
        </thead>
        </Table>
      </Row>
        </Col>
        </Row>
        <Row md="6" xs="6">
        <Col md="5" xs="5">
            <Row className="w-100 h-75" md="6" xs="6" style={{margin:'5px'}} >
            <Image className="w-100 h-50" src={inventarioSeleccionado.img2} thumbnail />
            </Row>
        </Col>
        <Col md="5" xs="5">
            <Row className="w-100 h-75" md="6" xs="6">
            <Image className="w-100 h-50" src={inventarioSeleccionado.img3} thumbnail />
            </Row>
        </Col>  
        </Row>
        <Row></Row>
    </Container>
    
    </body>

    </>
  )
}

export default Descripcion