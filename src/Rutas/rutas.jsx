import {Routes, Route } from 'react-router-dom'
import InicioDeSesion from '../Componentes/InicioDeSesion/InicioDeSesion'
import Registro from '../Componentes/Registro/Registro'
import Formulario from '../Componentes/Reserva/Formulario'
import Inventario from '../Componentes/Administrador/Inventario/Inventario'
import Habitaciones from '../Paginas/CatalogoDeHabitaciones/Habitaciones'
import Descripcion from '../Paginas/CatalogoDeHabitaciones/Descripcion/Descripcion'
import Carrrusel from '../Componentes/Carrusel/Carrusel'
import Inicio from '../Paginas/PaginaPrincial/Inicio'
import ContactoClientes from '../Paginas/Contacto/ContactoClientes'
import Nosotros from '../Paginas/Nosotros/Nosotros'

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path="/InicioDeSesion" element={<InicioDeSesion />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/" element={<Formulario />} />
      <Route path="/Inventario" element={<Inventario />} />  {/* Hacer una ruta privada*/}
      <Route path="/Habitaciones" element={<Habitaciones />} />
      <Route path="/Descripcion" element={<Descripcion />} />
      <Route path="/Carusel" element={<Carrrusel />} />
      <Route path="/ContactoClientes" element={<ContactoClientes />} />
      <Route path="/Nosotros" element={<Nosotros />} />
    </Routes>
    </>
  )
}

export default Rutas