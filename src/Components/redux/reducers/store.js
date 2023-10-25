import { createStore } from "redux"; 
import rootReducers from './index.js';

const store = createStore(rootReducers);

export default store;