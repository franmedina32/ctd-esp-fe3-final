import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);



export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState('light')
  const [data,setData] = useState()
  const url = "https://jsonplaceholder.typicode.com/users";

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(()=> {
    fetch(url)
       .then(res => res.json())
       .then(dataRes => setData(dataRes))
  },[])


  return (
    <ContextGlobal.Provider value={{theme,setTheme,data,setData,toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  ); 
};

export default ContextProvider

