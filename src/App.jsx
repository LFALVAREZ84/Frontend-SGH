import Navegador from './Componentes/Navegador/Navegador'
import PiedePagina from './Componentes/PiedePagina/Piedepagina';
import UserContext from './Contexto/UserContext';
import ContextoDeInventario from './Contexto/ContextoDeInventario';
import Rutas from './Rutas/Rutas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/App.css'


function App() {
  
  return (
    <>
      <UserContext>
        <ContextoDeInventario>
          <Navegador />
          <Rutas />
            <div className='container-fluid'>
              <div className='row'>
                <a href='https://previaje.gob.ar/'
                   target="_blank">
                  <img 
                    className="img-fluid d-block w-100"
                    src="src\assets\img\Publicidad Previaje.jpg" 
                    alt="publicidad pre-viaje"/>
                </a>
              </div>
            </div>
          <PiedePagina />
        </ContextoDeInventario>
      </UserContext>
    </>
  );
}

export default App
