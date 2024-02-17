import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Content  from './Components/Content';
import EditProduct from './Components/EditProduct';
import Home from './Components/Home';

function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/journaux' element={<Content/>} />
         <Route path='/editproduct/:type' element={<EditProduct/>} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
