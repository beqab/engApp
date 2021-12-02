import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import dictionaryStore, { IDictionary } from "./dictionaryReducer";

interface StoreState {
  dictionary: IDictionary[];
}

export const reducers = combineReducers<StoreState>({
  dictionary: dictionaryStore,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
