import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from 'redux-persist';
import ActionReducer from "./ActionSlice";
import UserDataReducer from './UserDataSlice';
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  actions: ActionReducer,
  userdata: UserDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});



const persistor = persistStore(store);

export { persistor,store }
//export const RootState = store.getState;/
//export const AppDispatch = store.dispatch;
