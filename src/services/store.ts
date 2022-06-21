import {
    Action,
    configureStore,
    ThunkAction
  } from '@reduxjs/toolkit';
  
  import storage from 'redux-persist/lib/storage';
  import { combineReducers } from 'redux';
  import { persistReducer } from 'redux-persist';
  
  import { counterReducer } from "../counter"
  
  import thunk from 'redux-thunk';
  
  const reducers = combineReducers({
        counter: counterReducer,
  });
  
  const persistConfig = {
    key: 'root',
    storage,
  };
  
  export const persistedReducer = persistReducer(persistConfig, reducers)
  
  const storeConfig = {
    reducer: persistedReducer,
    middleware: [thunk]
  }
  
  export const store = configureStore(storeConfig);
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  
  