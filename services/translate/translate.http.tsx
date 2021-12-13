import axios from "axios";
import { backEndRoutes } from "../backend-routes";

class _Translate {
  translateWord = (word: string): Promise<any> => {
    return axios.get(backEndRoutes.getTranslate(word));
  };
}

export const translate = new _Translate();
