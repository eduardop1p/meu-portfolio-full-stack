/* eslint-disable */

import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './globalStyles';
import Routers from './routers';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
