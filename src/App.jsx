import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactoClientes from './Componentes/ContactoClientes/ContactoClientes';

function App() {
  
  return (

  <main className='container-fluid border border-dark border-5'>
   <BrowserRouter>
   <div className='border border-5 n-5'>
   <Routes>
    
  
    
    <Route path = "/ContactoClientes" element={<ContactoClientes/>}/>
    
   </Routes>
      
    </div>
  
   
   
   </BrowserRouter>
  
  <div className='border border-danger border-5 n-5'>

  </div>
  
  
  
  
  
  
  
  </main>)
}

export default App
