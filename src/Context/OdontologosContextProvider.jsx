import { createContext, useState, useEffect } from "react";
export const OdontologosContext = createContext();

import React from "react";

function OdontologosContextProvider({children}) {
  const [dentistas, setDentistas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const dentistas = await data.json();
    setDentistas(dentistas);
  }

  return (
    <OdontologosContext.Provider value={dentistas}>
        {children}
    </OdontologosContext.Provider>
  )
}

export default OdontologosContextProvider;
