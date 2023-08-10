import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
 
import Contacto from './Paginas/Contacto/Contacto';
import ContactoClientes from './Componentes/ContactoClientes/ContactoClientes';

function App() {
  
  return (

  <main className='container-fluid border border-dark border-5'>
   <BrowserRouter>
   <div className='border border-danger border-5 n-5'>
   <Routes>
    
  
    <Route path = "/Contacto" element={<Contacto/>}/>
    <Route path = "/ContactoClientes" element={<ContactoClientes/>}/>
    
   </Routes>
      
    </div>
  
   
   
   </BrowserRouter>
  
  <div className='border border-danger border-5 n-5'>
 <ContactoClientes/>
  </div>
  
  
  
  
  
  
  
  </main>)
}

export default App
