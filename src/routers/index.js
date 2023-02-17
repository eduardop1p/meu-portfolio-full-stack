/* eslint-disable */

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/index';
import Error404 from '../pages/error404/index';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
