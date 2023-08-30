import { configureStore } from "@reduxjs/toolkit";
import friendsReducer from "./friendsSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root", // Key to use for storing in local storage
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
