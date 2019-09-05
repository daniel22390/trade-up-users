import React from 'react';
import {Provider} from 'react-redux'
import Navigator from './src/Navigator'
import storeConfig from './src/store/storeConfig'
import Modal from './src/interface/modal/Modal'

const store = storeConfig()
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <Modal />
    </Provider>
  );
}
