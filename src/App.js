/* eslint-disable */

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header/index';
import GlobalStyles from './globalStyles';
import Routers from './routers';
import store, { persist } from './redux/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <BrowserRouter>
          <GlobalStyles />
          <Header />
          <Routers />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
