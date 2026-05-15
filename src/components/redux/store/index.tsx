// IMPORT REDUCERS
import playerReducer from "../reducers/playerReducer";
import sidebarReducer from "../reducers/sidebarReducer";
import userReducer from "../reducers/userReducer";

// IMPORT STORE CONFIG
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// IMPORT PERSIST CONFIG
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  storage: localStorage,
  key: "root",
};

const mainReducer = combineReducers({
  /*user: userReducer,*/
  sidebar: sidebarReducer,
  /*player: playerReducer,*/
});

/*const persistedReducer = persistReducer(persistConfig, mainReducer);*/

const store = configureStore({
  reducer: mainReducer,
});

const persistedStore = persistStore(store);

export default store;
