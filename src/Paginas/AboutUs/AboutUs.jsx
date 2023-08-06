import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className='AbouUs'>
            <div className="banner bg-success d-flex align-items-center justify-content-center">
                <Image src="/public/logo_RHR.jpg" alt="Banner" className="img-fluid banner-image  " />
            </div>
            <Container>
                <div class="row text-bg text-center mg-10 justify-content-center align-items-center">
                    <div class="col-md-8">
                        <h1>
                            "¡Bienvenidos a Rolling Hotel&Resort! Somos un equipo de jóvenes programadores apasionados que creamos una página de gestión hotelera . Nuestra plataforma ofrece un servicio de autogestión y reservas para el público general. Simplifica tus operaciones y mejora la experiencia de tus clientes con Rolling Hotel&Resort."</h1>
                    </div>
                </div>
             



            </Container>
        </div>

    )
}

export default AboutUs