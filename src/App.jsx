import React from 'react'
import Home from './assets/Pages/Home';
import Login from './assets/Pages/Login'; 
import {
  BrowserRouter,

  Route,
  Routes,
} from "react-router-dom";
import Checkout from './assets/compnents/checkout';

function App() {
  return (
    <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </BrowserRouter>
    </>
    // <div>
    //   <Home />

      

    // </div>
  )
}

export default App;
