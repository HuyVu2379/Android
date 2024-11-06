import { createStore } from 'redux';
import taskReducer from './Action';

const store = createStore(taskReducer);

export default store;
