import { createContext, useState } from "react";
export const ThemeContext = createContext();

import React from "react";

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(getLocalstorage);

  function getLocalstorage() {
    return localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : "dark";
  }

  function toggleTheme() {
    let tema = "dark";
    if (theme === "dark") {
      tema = "light";
      setTheme("light");
    }
    if (theme === "light") {
      tema = "dark";
      setTheme("dark");
    }
    localStorage.setItem("theme", JSON.stringify(tema));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
