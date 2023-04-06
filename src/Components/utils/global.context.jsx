import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useEffect, useState,useReducer } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);

const initialApiState = []

const apiReducer = (state, action) => {
  switch(action.type){
      case 'GET_DENTISTS':
          return action.payload
      default:
          throw new Error
  }
}

export const ContextProvider = ({ children }) => {
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
  const [theme, setTheme] = useState('light')
  const url = "https://jsonplaceholder.typicode.com/users";

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(()=> {
    fetch(url)
       .then(res => res.json())
       .then(dataRes => apiDispatch({type: 'GET_DENTISTS',payload: dataRes}))
  },[])


  return (
    <ContextGlobal.Provider value={{apiState,theme,setTheme,toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  ); 
};

export default ContextProvider

