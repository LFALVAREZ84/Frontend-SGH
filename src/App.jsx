import Navegador from './Componentes/Navegador/Navegador'
import PiedePagina from './Componentes/PiedePagina/Piedepagina';
import Carrusel from './Componentes/Carrusel/Carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
      <div>
        <Navegador />
        <Carrusel />
        <PiedePagina />
      </div>
    </>
  )
}

export default App
