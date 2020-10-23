import React from 'react';
import { Provider } from 'react-redux';

import Catalog from './components/Catalog';
import Cart from './components/Cart';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
};

export default App;
