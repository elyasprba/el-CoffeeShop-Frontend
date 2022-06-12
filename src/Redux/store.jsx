import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import loginReducer, { userTokenReducer } from './reducer/login';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   storage,
};

const reducer = combineReducers({
   userInfo: userTokenReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// redux-logger
const logger = createLogger();
const middleware = [thunk, logger];

export let store = configureStore({
   reducer: {
      auth: persistedReducer,
      userLogin: loginReducer,
   },
   middleware,
});
export let persistor = persistStore(store);
