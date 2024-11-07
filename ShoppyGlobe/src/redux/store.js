

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

//creating the redux store
export const store = configureStore({
    //Using RootReducer for the store
  reducer: rootReducer,
});


