
import { createContext } from "react";

const languageContext = createContext({
  language: "en",
  setLanguage: (language) => {}
});

export default languageContext;
