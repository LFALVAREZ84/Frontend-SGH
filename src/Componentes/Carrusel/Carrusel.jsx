import Carousel from 'react-bootstrap/Carousel';
import './../Carrusel/stylecarrusel.css';

function Carrusel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Frente hotel.jpg'
            alt='Primer slider'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Habitacion hotel.jpg'
            alt='Segundo slider'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Restaurante hotel.jpeg'
            alt='Tercer slider'
          />
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Carrusel;
