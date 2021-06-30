
import { createContext } from "react";

const languageContext = createContext({
  language: "",
  setLanguage: (language) => {}
});

export default languageContext;
