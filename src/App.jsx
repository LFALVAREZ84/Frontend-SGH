<<<<<<< HEAD
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import AboutUs from './Paginas/AboutUs/AboutUs';
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navegador from './Componentes/Navegador/Navegador';
import Rutas from './Rutas/Rutas';
import UserContext from './Contexto/UserContext';


>>>>>>> origin/Login

function App() {
  return (
<<<<<<< HEAD
    <>
<<<<<<< HEAD
      <div>
        
      </div>
    </BrowserRouter>
=======

  <main className='container-fluid border border-dark border-5'>
   <BrowserRouter>
   <div className='border border-danger border-5 n-5'>
   <Routes>
    
    <Route path = "/AboutUs" element={<AboutUs/>}/>

    
   </Routes>
      
    </div>
  
   
   
   </BrowserRouter>
  
  
  
  
  
  
  
  
  
>>>>>>> origin/AboutUs
  </main>)
=======
      <UserContext>
        <Navegador />
        <Rutas />
      </UserContext>
    </> 
  );
>>>>>>> origin/Login
}

export default App;
