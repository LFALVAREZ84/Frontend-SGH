import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import AboutUs from './Paginas/AboutUs/AboutUs';

function App() {
  
  return (

  <main className='container-fluid border border-dark border-5'>
   <BrowserRouter>
   <div className='border border-danger border-5 n-5'>
   <Routes>
    
    <Route path = "/AboutUs" element={<AboutUs/>}/>

    
   </Routes>
      
    </div>
  
   
   
   </BrowserRouter>
  
  
  
  
  
  
  
  
  
  </main>)
}

export default App
