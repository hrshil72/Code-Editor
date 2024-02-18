import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  let [html, setHtml] = useState("");
  let [css, setCss] = useState("");
  let [js, setJs] = useState("");

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
