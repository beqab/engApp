import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dictionaryStore, { IDictionary } from "./dictionaryReducer";

interface StoreState {
  dictionary: IDictionary[];
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dictionary"],
};

export const reducers = combineReducers<StoreState>({
  dictionary: dictionaryStore,
});

export const store = createStore(
  persistReducer(persistConfig, reducers),
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
