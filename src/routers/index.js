/* eslint-disable */

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import Error404 from '../pages/error404';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
