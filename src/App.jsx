import Navegador from './Componentes/Navegador/Navegador'
import PiedePagina from './Componentes/PiedePagina/Piedepagina';
import Carrusel from './Componentes/Carrusel/Carrusel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/App.css'


function App() {
  
  return (
    <>
      <div>
        <Navegador />
        <Carrusel />
        <div className='container'>
          <div className='row'>
            <a>
            <img src="src\assets\img\Publicidad Previaje.jpg" class="img-fluid" alt="..."/>
            </a>
          </div>
        </div>
        
        <PiedePagina />
      </div>
    </>
  )
}

export default App
