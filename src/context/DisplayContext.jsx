import { createContext, useState } from "react";

export const DisplayContext = createContext()

export const DisplayProvider = ({ children }) => {
    const [display, setDisplay] = useState("")

    return (
        <DisplayContext.Provider value={{display, setDisplay}}>
            {children}
        </DisplayContext.Provider>
    )
}