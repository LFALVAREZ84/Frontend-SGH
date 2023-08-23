import {Routes, Route } from 'react-router-dom'
import InicioDeSesion from '../Componentes/InicioDeSesion/InicioDeSesion'
import Registro from '../Componentes/Registro/Registro'
import Formulario from '../Componentes/Reserva/Formulario'
import Inventario from '../Componentes/Administrador/Inventario/Inventario'
import Administrador from './../Componentes/Administrador/Administrador'
import Habitaciones from '../Paginas/CatalogoDeHabitaciones/Habitaciones'
import Descripcion from '../Paginas/CatalogoDeHabitaciones/Descripcion/Descripcion'
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
      <Route path="/Formulario" element={<Formulario />} />
      <Route path="/Inventario" element={<Inventario />} />  {/* Hacer una ruta privada*/}
      <Route path="/Administrador" element={<Administrador />} />  {/* Hacer una ruta privada*/}
      <Route path="/Habitaciones" element={<Habitaciones />} />
      <Route path="/Descripcion/:id" element={<Descripcion />} />
      <Route path="/ContactoClientes" element={<ContactoClientes />} />
      <Route path="/Nosotros" element={<Nosotros />} />
    </Routes>
    </>
  )
}

export default Rutas
