import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
