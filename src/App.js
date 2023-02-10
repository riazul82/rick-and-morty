import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

// pages
import Home from './pages/Home';
import Error404 from './pages/Error404';

import ScrollToTop from './effects/ScrollToTop';
import TheCast from './pages/TheCast';
import CastDetails from './pages/CastDetails';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cast" element={<TheCast/>} />
        <Route path="/cast/:id" element={<CastDetails/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;