import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
 
export default function ThemeContextProvider(props) {
    const [state, changeState] = useState({
        isLightTheme: true,
        light: {text: '#555', ui: '#ddd', bg: '#eee' },
        dark : {text: '#ddd', ui: '#333', bg: '#555'}
    });

    const toggleTheme = () => changeState({...state, isLightTheme: !state.isLightTheme});
   
    return (
      <ThemeContext.Provider value={{state, toggleTheme: toggleTheme}}>
        {props.children}
      </ThemeContext.Provider>
    )
}
