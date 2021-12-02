import { dictionaryActionTypes } from "../actionTypes/dictionaryTypes";
import { IAddWord } from "./dictionaryActions";

export interface IDictionary {
  word: string;
  pronunciation?: string;
  definition: string;
  examples?: string;
}

const store = (state: IDictionary[] = [], action: IAddWord) => {
  switch (action.type) {
    case dictionaryActionTypes.addWord:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default store;
