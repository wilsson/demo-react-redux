import { createStore } from 'redux';
import { reducer, addTask, deleteTask } from './app';

// store
export const configureStore = () => {
    const store = createStore(reducer);
    return store;
}