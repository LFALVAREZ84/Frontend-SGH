import {Routes, Route } from 'react-router-dom'
import InicioDeSesion from '../Componentes/InicioDeSesion/InicioDeSesion'
import Registro from '../Componentes/Registro/Registro'

const Rutas = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<></>} />
      <Route path="/InicioDeSesion" element={<InicioDeSesion />} />
      <Route path="/Registro" element={<Registro />} />
      
    </Routes>
    </>
  )
}

export default Rutas