import React from 'react'
import './../Carrusel/stylecarrusel.css';
import { Container } from 'react-bootstrap';

const Carrusel = () => {
  return (
    <Container>
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="src\assets\img\Frente hotel.jpg" className="d-block w-100" alt="Imagen del frente del hotel"/>
            </div>
            <div className="carousel-item">
                <img src="src\assets\img\Restaurante hotel.jpeg" className="d-block w-100"  alt="Imagen de Comida"/>
            </div>
            <div className="carousel-item">
                <img src="src\assets\img\Habitacion hotel.jpg" className="d-block w-100" alt="Imagen de la Habitacion"/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
    </div>
</Container>
)
}

export default Carrusel