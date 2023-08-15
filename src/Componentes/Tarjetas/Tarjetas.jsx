import { useContext } from 'react'
import { ContextoInventario } from '../../Contexto/ContextoDeInventario'
import { Card, Button } from 'react-bootstrap'

const Tarjetas = () => {

    const {inventario} = useContext(ContextoInventario)
    console.log(inventario, "inventario")

  return (
    <>
        <div className='m-1 d-flex flex-row'>
            {inventario === undefined ? 
            "No Hay habitaciones disponibles":
            inventario.map((inventario) => (
                <>
                <Card key={inventario.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>
                        {inventario.nombre}
                    </Card.Title>
                    <Card.Text>
                        {inventario.descripcion} 
                    </Card.Text>
                    <Card.Text>
                        Precio: {inventario.precio} 
                    </Card.Text>

                <Button variant="primary">Reservar</Button>
                </Card.Body>
            </Card>
            </>   
        ))}
        </div>
    </>
  );
};

export default Tarjetas;