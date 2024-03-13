import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

<<<<<<< HEAD
import Content  from './Pages/Content';
import EditProduct from './Pages/EditProduct';
import Home from './Pages/Home';
import ShowProduct from './Pages/ShowProduct';
import ValidationCaisse from './Pages/ValidationCaisse';
=======
import Content  from './Components/Content';
import EditProduct from './Components/EditProduct';
import Home from './Components/Home';
import ShowProduct from './Components/ShowProduct';
import ValidationCaisse from './Components/ValidationCaisse';
>>>>>>> master

function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/journaux' element={<Content/>} />
         <Route path='/addproduct/:type' element={<EditProduct/>} /> 
         <Route path='/editproduct/:type' element={<ShowProduct/>} /> 
         <Route path='/validation_caisse' element={<ValidationCaisse/>} /> 

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
