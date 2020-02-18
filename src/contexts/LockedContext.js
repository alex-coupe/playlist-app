import React, { createContext, useState } from "react";

export const LockedContext = createContext();

export default function LockedContextProvider(props) {
    const [isLocked, setLocked] = useState(false);

    const toggleLocked = () => setLocked(!isLocked);

    return (
        <LockedContext.Provider value={{isLocked, toggleLocked: toggleLocked}}>
            {props.children}
        </LockedContext.Provider>
    )
}
