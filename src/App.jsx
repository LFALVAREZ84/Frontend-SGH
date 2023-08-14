import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navegador from './Componentes/Navegador/Navegador';
import Rutas from './Rutas/Rutas';
import UserContext from './Contexto/UserContext';



function App() {
  return (
    <>
      <UserContext>
        <Navegador />
        <Rutas />
      </UserContext>
    </> 
  );
}

export default App;
