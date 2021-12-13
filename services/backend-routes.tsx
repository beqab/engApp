import { STORE_API_BASE_URL } from "./api";

export const backEndRoutes = {
  getTranslate: (word) => `${STORE_API_BASE_URL}/entries/en/${word}`,
};
