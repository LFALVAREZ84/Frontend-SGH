const Carrusel = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="src\assets\img\Frente hotel.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="src\assets\img\Habitacion hotel.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="src\assets\img\Restaurante hotel.jpeg" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrusel
