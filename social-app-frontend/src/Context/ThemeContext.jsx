import { createContext } from "react";

export const ThemeContext = createContext()

function ThemeContextProvider({children}) {

    const mode = "light"


    return <ThemeContext.Provider value={{mode: mode}}  >{children}</ThemeContext.Provider>
}

export default ThemeContextProvider