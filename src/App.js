import './App.css';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Product from './Routes/Product';
import { Route, Routes } from 'react-router-dom';
import Login from './Routes/Login';





function App() {
  return (
    <>
    <div className='App'>
    
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/product" element={ <Product /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/login" element={ <Login /> } />
      

    </Routes>


    
    </div>
    </>
  );
}

export default App;
