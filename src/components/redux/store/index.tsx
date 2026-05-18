// IMPORT REDUCERS
import sidebarReducer from "../reducers/sidebarReducer";
import currentUserReducer from "../reducers/currentUserReducer";
import usersReducer from "../reducers/usersReducer";

// IMPORT STORE CONFIG
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// IMPORT PERSIST CONFIG
import {
  persistStore,
  persistReducer,
  type PersistConfig,
} from "redux-persist";

import localStorage from "redux-persist/es/storage";
import { encryptTransform } from "@shanie1331/redux-persist-transform-encrypt";
import trackPlayerReducer from "../reducers/trackPlayerReducer";

const mainReducer = combineReducers({
  currentUser: currentUserReducer,
  users: usersReducer,
  sidebar: sidebarReducer,
  trackPlayer: trackPlayerReducer,
});

type RootState = ReturnType<typeof mainReducer>;

const persistConfig: PersistConfig<RootState> = {
  storage: localStorage,
  key: "root",
  whitelist: ["currentUser", "users", "trackPlayer"],
  transforms: [
    encryptTransform({
      secretKey: "secret-key",
      onError(error: Error) {
        console.error("[persist-encrypt] error:", error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
          "persist/REGISTER",
        ],
      },
    }),
});

const persistedStore = persistStore(store as any);

export type AppDispatch = typeof store.dispatch;
export { store, persistedStore };
export type { RootState };
