import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactoClientes from './Componentes/ContactoClientes/ContactoClientes';

function App() {
  
  return (
    <main className='container-fluid'>
    <BrowserRouter>
      <div className='border rounded p-4'> {/* Agrega clases para el borde estilizado */}
        <Routes>
          <Route path="/ContactoClientes" element={<ContactoClientes />} />
        </Routes>
      </div>
    </BrowserRouter>
  </main>)
}

export default App
