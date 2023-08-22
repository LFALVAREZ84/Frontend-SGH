import { Container } from "react-bootstrap"

const Publicidad = () => {
  return (
    <Container fluid>
    <Row>
      <>  
        <Image 
          className="img-fluid d-block w-100"
          src="src\assets\img\Publicidad Previaje.jpg" 
          alt="publicidad pre-viaje"
          href='https://previaje.gob.ar/'
          target="_blank"
          />
      </>
    </Row>
  </Container>
  )
}

export default Publicidad