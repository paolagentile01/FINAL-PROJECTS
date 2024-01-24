
import utenteReducer from '../reducers/utenteReducer';
import { createStore } from '@reduxjs/toolkit';

// Configura il tuo store Redux
const store = createStore(utenteReducer);

export default store;