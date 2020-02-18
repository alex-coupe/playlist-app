import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
 
export default function ThemeContextProvider(props) {
    const [state] = useState({
        isLightTheme: true,
        light: {text: '#555', ui: '#ddd', bg: '#eee' },
        dark : {text: '#ddd', ui: '#333', bg: '#555'}
    })
   
    return (
      <ThemeContext.Provider value={state}>
        {props.children}
      </ThemeContext.Provider>
    )
}
