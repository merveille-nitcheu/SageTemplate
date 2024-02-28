import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Content  from './Pages/Content';
import EditProduct from './Pages/EditProduct';
import Home from './Pages/Home';
import ShowProduct from './Pages/ShowProduct';
import ValidationCaisse from './Pages/ValidationCaisse';

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
