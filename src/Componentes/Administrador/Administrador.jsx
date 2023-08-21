import { Button, Container, Table, Tabs, Tab } from 'react-bootstrap';


const Administrador = () => {
  return (
    <body data-bs-theme="dark" style={{ height: '94vh'}}>
    <Container data-bs-theme="dark" >
      
    <h1 className="text-center" style={{ padding: '100px'}} >Panel de Administrador</h1>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      data-bs-theme="dark"
      justify
    >
      <Tab eventKey="Reservas" title="Reservas">
        <>
      <Table responsive="sm" data-bs-theme="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Usuario</th>
            <th>Habitacion</th>
            <th>Desde</th>
            <th>Hasta</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td><Button variant='danger'>Eliminar</Button></td>
          </tr>
        </tbody>
      </Table>
      </>
      </Tab>
      <Tab eventKey="Usuarios" title="Usuarios">
      <Table responsive="sm" data-bs-theme="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
            <Button style={{ marginRight: '10px', marginTop:'5px',width:'38px'}} variant='danger'>-</Button>
            <Button style={{ marginTop:'5px'}} variant='warning'>Bloquear</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      </Tab>
      <Tab eventKey="Habitaciones" title="Habitaciones">
      <Table responsive="sm" data-bs-theme="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Capacidad</th>
            <th>Precio</th>
            <td><Button>Agregar</Button></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
            <Button style={{ marginRight: '10px', marginTop:'5px',width:'38px'}} variant='danger'>-</Button>
            <Button style={{ marginTop:'5px'}} variant='warning'>+</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </Container>
    </body>
  );
}

export default Administrador;