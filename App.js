import React from 'react';
import {Provider} from 'react-redux'
import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
