import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friendsSlice.ts";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, friendsReducer);

const store = configureStore({
  reducer: {
    friends: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
