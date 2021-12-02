import { dictionaryActionTypes } from "../actionTypes/dictionaryTypes";

export interface IAddWord {
  type: dictionaryActionTypes.addWord;
  payload: {
    word: string;
    pronunciation?: string;
    definition: string;
    examples?: string;
  };
}

export const addWord = (data: IAddWord["payload"]): IAddWord => {
  return {
    type: dictionaryActionTypes.addWord,
    payload: data,
  };
};
