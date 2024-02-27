import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Content  from './Components/Content';
import EditProduct from './Components/EditProduct';
import Home from './Components/Home';
import ShowProduct from './Components/ShowProduct';
import ValidationCaisse from './Components/ValidationCaisse';

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
