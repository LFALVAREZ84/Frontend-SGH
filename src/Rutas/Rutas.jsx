<<<<<<< HEAD
import {Routes, Route } from 'react-router-dom'
import InicioDeSesion from '../Componentes/InicioDeSesion/InicioDeSesion'
import Registro from '../Componentes/Registro/Registro'
import Formulario from '../Componentes/Reserva/Formulario'
import Inventario from '../Componentes/Administrador/Inventario/Inventario'
import CatalogoDeHabitaciones from '../Paginas/CatalogoDeHabitaciones/CatalogoDeHabitaciones'

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<></>} />
      <Route path="/InicioDeSesion" element={<InicioDeSesion />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Reserva" element={<Formulario />} />
      <Route path="/Inventario" element={<Inventario />} />  {/* Hacer una ruta privada*/}
      <Route path="/CatalogoDeHabitaciones" element={<CatalogoDeHabitaciones />} />
    </Routes>
    </>
  )
}

export default Rutas
=======
import React from 'react'

const Rutas = () => {
  return (

  )
}

export default Rutas
>>>>>>> origin/AboutUs
